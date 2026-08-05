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

function animateBarStagger(chart: any): void {
    const dataset = chart.data.datasets[0];
    if (!dataset?.data?.length) return;

    const targetData = [...dataset.data];
    const barCount = targetData.length;

    // Start all bars at 0
    dataset.data = dataset.data.map(() => 0);
    chart.update('none');

    // Set animation config
    chart.options.animation = false;
    chart.options.animations = false;

    // Stagger each bar with setTimeout
    for (let i = 0; i < barCount; i++) {
        setTimeout(() => {
            // Animate bar i from 0 to target
            const from = { y: 0 };
            const to = { y: targetData[i] };

            gsap.fromTo(
                from,
                { y: 0 },
                {
                    y: targetData[i],
                    duration: 0.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        dataset.data[i] = Math.round(from.y);
                        chart.update('none');
                    },
                }
            );
        }, i * 200);
    }
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

    const canvas = root.querySelector<HTMLCanvasElement>('.nextora-chart__canvas');
    if (!canvas) return;

    try {
        (window as any).__chartDebugCfg = config;
        const chart = new Chart(canvas, config);
        (window as any).__chartInst = chart;

        if (config?.type === 'bar') {
            animateBarStagger(chart);
        }
    } catch {
        root.classList.remove('nextora-chart--loading');
        return;
    }

    root.classList.remove('nextora-chart--loading');
    root.classList.add('nextora-chart--ready');
}

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
