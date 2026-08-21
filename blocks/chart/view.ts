import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

Chart.register(...registerables);
Chart.register(ChartDataLabels);
gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function abbrevNumber(num: number): string {
    if (num === 0) return '0';
    const abs = Math.abs(num);
    if (abs >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (abs >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (abs >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toLocaleString('vi-VN');
}

function numberFormatter(value: unknown): string {
    const num = typeof value === 'number' ? value : parseFloat(String(value));
    if (isNaN(num)) return '';
    return abbrevNumber(num);
}

function doughnutFormatter(value: unknown, context: any): string {
    const num = typeof value === 'number' ? value : parseFloat(String(value));
    if (isNaN(num) || num <= 0) return '';

    const label = context?.chart?.data?.labels?.[context?.dataIndex] ?? '';

    const dataset = context?.chart?.data?.datasets?.[0];
    const total = (dataset?.data as number[])?.reduce((a: number, b: number) => a + b, 0) ?? 1;
    const pct = total > 0 ? Math.round((num / total) * 100) : 0;

    return `${label}\n${abbrevNumber(num)} (${pct}%)`;
}

function tickFormatter(value: unknown): string {
    const num = typeof value === 'number' ? value : parseFloat(String(value));
    if (isNaN(num)) return '';
    return abbrevNumber(num);
}

function resolveSchemeColor(source: unknown, fallback: string): string {
    const value = typeof source === 'string' ? source.trim() : '';
    if (!value || !/^[a-z0-9-]+$/i.test(value)) {
        return fallback;
    }

    const probe = document.createElement('span');
    probe.style.color = `var(--wp--preset--color--${value})`;
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    probe.remove();
    return resolved || fallback;
}

function resolveChartColor(source: unknown, fallback: string): string {
    const value = typeof source === 'string' ? source.trim() : '';
    return value && /^[a-z0-9-]+$/i.test(value) ? resolveSchemeColor(value, fallback) : fallback;
}

function refreshChartColors(config: any): void {
    const sources = config?.colorSources;
    if (!sources) return;

    const datasets = config?.data?.datasets || [];
    const line = resolveChartColor(sources.line, '#3b82f6');
    const fill = sources.fill && !/^[a-z0-9-]+$/i.test(sources.fill)
        ? sources.fill
        : (sources.fill ? resolveSchemeColor(sources.fill, line) : `rgba(${line.match(/\d+/g)?.slice(0, 3).join(',') || '59,130,246'},0.15)`);
    const text = resolveChartColor(sources.text, '#333333');
    const grid = resolveChartColor(sources.grid, '#e5e5e5');

    datasets.forEach((dataset: any) => {
        if (config.type === 'doughnut') {
            dataset.backgroundColor = Array.from({ length: dataset.data?.length || 1 }, (_, index) => line);
        } else if (config.type === 'bar') {
            dataset.backgroundColor = line;
            dataset.borderColor = line;
        } else {
            dataset.borderColor = line;
            dataset.backgroundColor = fill;
            dataset.pointBackgroundColor = line;
        }
    });

    const options = config.options || {};
    const scales = options.scales || {};
    ['x', 'y'].forEach((axis) => {
        if (scales[axis]?.grid) scales[axis].grid.color = scales[axis].grid.display ? grid : 'transparent';
        if (scales[axis]?.ticks) scales[axis].ticks.color = text;
    });
    if (options.plugins?.legend?.labels) options.plugins.legend.labels.color = text;
    if (options.plugins?.datalabels) options.plugins.datalabels.color = text;
}

const chartStates = new WeakMap<HTMLElement, { chart: any; config: any }>();
const staggerTimers = new WeakMap<HTMLElement, number[]>();

function clearChartTimers(root: HTMLElement): void {
    const timers = staggerTimers.get(root);
    if (timers) {
        timers.forEach((timer) => window.clearTimeout(timer));
        staggerTimers.delete(root);
    }
}

function rebuildChart(root: HTMLElement): void {
    const canvas = root.querySelector<HTMLCanvasElement>('.nextora-chart__canvas');
    if (canvas) {
        const chart = Chart.getChart(canvas);
        if (chart) {
            chart.destroy();
        }
    }
    clearChartTimers(root);
    root.removeAttribute('data-nextora-chart-inited');
    initChart(root);
}

function rebuildAllCharts(): void {
    document.querySelectorAll<HTMLElement>('.nextora-chart').forEach(rebuildChart);
}

function applyAbbrevFormatters(config: any): void {
    const isDoughnut = config?.type === 'doughnut';

    // Y-axis ticks
    if (!isDoughnut && config?.options?.scales?.y?.ticks) {
        config.options.scales.y.ticks.callback = tickFormatter;
    }

    // Tooltip label
    if (config?.options?.plugins?.tooltip) {
        const prevCallback = config.options.plugins.tooltip.callbacks?.label;
        config.options.plugins.tooltip.callbacks = {
            ...(config.options.plugins.tooltip.callbacks || {}),
            label: (ctx: any) => {
                const label = ctx.dataset?.label || '';
                const prefix = label ? label + ': ' : '';
                const raw = isDoughnut ? ctx.parsed : (ctx.parsed?.y ?? ctx.parsed ?? ctx.raw);
                return prefix + abbrevNumber(Number(raw));
            },
        };
    }
}

function resolveFormatters(config: any): void {
    const datalabels = config?.options?.plugins?.datalabels;
    if (!datalabels) return;

    if (datalabels.formatter === '__NEXTORA_NUMBER_FORMATTER__') {
        datalabels.formatter = numberFormatter;
    } else if (datalabels.formatter === '__NEXTORA_DOUGHNUT_FORMATTER__') {
        datalabels.formatter = doughnutFormatter;
    }
}

function animateBarStagger(chart: any, root: HTMLElement): void {
    const dataset = chart.data.datasets[0];
    if (!dataset?.data?.length) return;

    const targetData = [...dataset.data];
    const barCount = targetData.length;
    const timers: number[] = [];

    // Start all bars at 0
    dataset.data = dataset.data.map(() => 0);
    chart.update('none');

    // Set animation config
    chart.options.animation = false;
    chart.options.animations = false;

    // Stagger each bar with setTimeout
    for (let i = 0; i < barCount; i++) {
        const timer = window.setTimeout(() => {
            // Animate bar i from 0 to target
            const from = { y: 0 };

            gsap.fromTo(
                from,
                { y: 0 },
                {
                    y: targetData[i],
                    duration: 0.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        if (chart.ctx) {
                            dataset.data[i] = Math.round(from.y);
                            chart.update('none');
                        }
                    },
                }
            );
        }, i * 200);
        timers.push(timer);
    }

    staggerTimers.set(root, timers);
}

function applyStaggeredAnimation(config: any): void {
    const chartType = config?.type as string;

    if (prefersReducedMotion()) {
        config.options.animation = false;
        return;
    }

    if (chartType === 'doughnut') {
        config.options.animation = { duration: 800, easing: 'easeOutQuart' };
        return;
    }

    // Line: CSS clip-path, Bar: manual GSAP stagger
    config.options.animation = false;
}

function initChart(root: HTMLElement): void {
    if (root.hasAttribute('data-nextora-chart-inited')) return;
    root.setAttribute('data-nextora-chart-inited', '1');

    const configStr = root.getAttribute('data-nextora-chart-config');
    if (!configStr) return;

    let config: any;
    try {
        config = JSON.parse(configStr);
    } catch {
        return;
    }

    resolveFormatters(config);
    applyAbbrevFormatters(config);
    applyStaggeredAnimation(config);
    refreshChartColors(config);

    const canvas = root.querySelector<HTMLCanvasElement>('.nextora-chart__canvas');
    if (!canvas) return;

    try {
        (window as any).__chartDebugCfg = config;
        const chart = new Chart(canvas, config);
        chartStates.set(root, { chart, config });
        (window as any).__chartInst = chart;

        if (config?.type === 'bar') {
            animateBarStagger(chart, root);
        }
    } catch {
        root.classList.remove('nextora-chart--loading');
        return;
    }

    root.classList.remove('nextora-chart--loading');
    root.classList.add('nextora-chart--ready');
}

window.addEventListener('nextora:schemechange', rebuildAllCharts);

function initChartRoot(root: HTMLElement): void {
    if (root.hasAttribute('data-nextora-chart-inited')) return;

    const wantScrollReveal =
        root.dataset.nextoraScrollReveal === '1' && !prefersReducedMotion();

    if (!wantScrollReveal) {
        initChart(root);
        root.classList.add('nextora-chart--reveal-ready');
        return;
    }

    root.classList.add('nextora-chart--reveal-pending');

    ScrollTrigger.create({
        trigger: root,
        start: 'top bottom-=100',
        once: true,
        onEnter: () => {
            root.classList.remove('nextora-chart--reveal-pending');
            root.classList.add('nextora-chart--reveal-ready');
            initChart(root);
        },
    });
}

function initAllCharts(): void {
    document
        .querySelectorAll<HTMLElement>(
            '.nextora-chart:not([data-nextora-chart-inited])'
        )
        .forEach(initChartRoot);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllCharts);
} else {
    initAllCharts();
}
