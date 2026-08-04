import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    RangeControl,
    TextControl,
    Button,
} from '@wordpress/components';
import type { BlockEditProps } from '@wordpress/blocks';
import type { ChartAttributes, ChartDataPoint } from './types';

function createDataPointId(): string {
    return 'dp-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function parseSuffixValue(raw: string): number {
    const trimmed = raw.trim();
    if (!trimmed) return 0;

    const upper = trimmed.toUpperCase();

    // Pattern: number (with optional comma/dot separators) + optional suffix K/M/B/T
    const match = upper.match(/^([\d.,]+)\s*(K|M|B|T)?$/);
    if (match) {
        let rawNum = match[1];
        const suffix = match[2];
        const sepCount = (rawNum.match(/[.,]/g) || []).length;

        let num: number;
        if (sepCount > 1) {
            // Multiple separators → thousand separators → strip all
            num = parseFloat(rawNum.replace(/[.,]/g, ''));
        } else if (sepCount === 1 && suffix) {
            // Single separator with suffix → treat as decimal (e.g. "1.5M")
            num = parseFloat(rawNum.replace(',', '.'));
        } else if (sepCount === 1 && !suffix) {
            // Single separator without suffix → could be decimal or thousand
            // If separator is followed by exactly 3 digits, it's a thousand separator
            if (/[.,]\d{3}$/.test(rawNum)) {
                num = parseFloat(rawNum.replace(/[.,]/g, ''));
            } else {
                num = parseFloat(rawNum.replace(',', '.'));
            }
        } else {
            num = parseFloat(rawNum);
        }

        if (isNaN(num)) return 0;

        switch (suffix) {
            case 'K': return num * 1_000;
            case 'M': return num * 1_000_000;
            case 'B': return num * 1_000_000_000;
            case 'T': return num * 1_000_000_000_000;
            default: return num;
        }
    }

    // Last resort: strip non-numeric chars except minus/dot
    const fallback = parseFloat(trimmed.replace(/[^\d.-]/g, ''));
    return isNaN(fallback) ? 0 : fallback;
}

function formatDisplayValue(num: number): string {
    if (num === 0) return '0';
    const abs = Math.abs(num);
    if (abs >= 1_000_000_000_000) {
        return (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + 'T';
    }
    if (abs >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (abs >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (abs >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toLocaleString('vi-VN');
}

export default function Edit({ attributes, setAttributes }: BlockEditProps<ChartAttributes>) {
    const blockProps = useBlockProps();
    const {
        chartType,
        dataPoints,
        showDataLabels,
        showLegend,
        legendPosition,
        showTooltip,
        chartHeight,
        lineColor,
        fillColor,
        textColor,
        gridColor,
        showXGrid,
        showYGrid,
        showXTickLabels,
        showYTickLabels,
        enableScrollAnimation,
    } = attributes;

    const [valueInputs, setValueInputs] = useState<Record<string, string>>({});

    const maxValue = Math.max(...dataPoints.map((d) => d.value), 1);
    const hasData = dataPoints.length > 0;

    const chartTypeLabel =
        chartType === 'bar'
            ? __('Bar Chart', 'nextora')
            : chartType === 'doughnut'
              ? __('Doughnut Chart', 'nextora')
              : __('Line Chart', 'nextora');

    function addDataPoint() {
        const newPoint: ChartDataPoint = {
            id: createDataPointId(),
            label: 'Item ' + (dataPoints.length + 1),
            value: 50,
        };
        setAttributes({ dataPoints: [...dataPoints, newPoint] });
    }

    function removeDataPoint(id: string) {
        setAttributes({ dataPoints: dataPoints.filter((d) => d.id !== id) });
    }

    function updateDataPoint(id: string, patch: Partial<ChartDataPoint>) {
        setAttributes({
            dataPoints: dataPoints.map((d) => (d.id === id ? { ...d, ...patch } : d)),
        });
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Data', 'nextora')} initialOpen={true}>
                    {dataPoints.length === 0 && (
                        <p style={{ color: '#888', fontStyle: 'italic', marginBottom: '8px' }}>
                            {__('No data points yet. Add one below.', 'nextora')}
                        </p>
                    )}
                    {dataPoints.map((dp, index) => (
                        <div
                            key={dp.id}
                            style={{
                                display: 'flex',
                                gap: '4px',
                                marginBottom: '8px',
                                alignItems: 'flex-end',
                            }}
                        >
                            <div style={{ flex: 1 }}>
                                <TextControl
                                    label={index === 0 ? __('Label', 'nextora') : undefined}
                                    value={dp.label}
                                    onChange={(v: string) => updateDataPoint(dp.id, { label: v })}
                                    __next40pxDefaultSize
                                />
                            </div>
                            <div style={{ width: '80px' }}>
                                <TextControl
                                    label={index === 0 ? __('Value', 'nextora') : undefined}
                                    type="text"
                                    value={valueInputs[dp.id] ?? formatDisplayValue(dp.value)}
                                    onChange={(v: string) => {
                                        setValueInputs((prev) => ({ ...prev, [dp.id]: v }));
                                    }}
                                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                        const raw = e.target.value;
                                        const parsed = parseSuffixValue(raw);
                                        updateDataPoint(dp.id, { value: parsed });
                                        setValueInputs((prev) => {
                                            const next = { ...prev };
                                            delete next[dp.id];
                                            return next;
                                        });
                                    }}
                                    __next40pxDefaultSize
                                />
                            </div>
                            <Button
                                icon="trash"
                                label={__('Remove data point', 'nextora')}
                                onClick={() => removeDataPoint(dp.id)}
                                isDestructive
                                style={{ marginBottom: '2px', minWidth: '36px' }}
                                __next40pxDefaultSize
                            />
                        </div>
                    ))}
                    <Button
                        variant="secondary"
                        onClick={addDataPoint}
                        icon="plus"
                        style={{ width: '100%', justifyContent: 'center' }}
                        __next40pxDefaultSize
                    >
                        {__('Add data point', 'nextora')}
                    </Button>

                    <div style={{ marginTop: '16px' }}>
                        <SelectControl
                            label={__('Chart type', 'nextora')}
                            value={chartType}
                            options={[
                                { label: __('Line', 'nextora'), value: 'line' },
                                { label: __('Bar', 'nextora'), value: 'bar' },
                                { label: __('Doughnut', 'nextora'), value: 'doughnut' },
                            ]}
                            onChange={(v) =>
                                setAttributes({ chartType: v as ChartAttributes['chartType'] })
                            }
                            __next40pxDefaultSize
                        />
                    </div>
                </PanelBody>

                <PanelBody title={__('Display', 'nextora')} initialOpen={false}>
                    <ToggleControl
                        label={__('Show data labels', 'nextora')}
                        help={__('Display values on chart elements', 'nextora')}
                        checked={showDataLabels}
                        onChange={(v) => setAttributes({ showDataLabels: v })}
                    />
                    <ToggleControl
                        label={__('Show legend', 'nextora')}
                        checked={showLegend}
                        onChange={(v) => setAttributes({ showLegend: v })}
                    />
                    {showLegend && (
                        <SelectControl
                            label={__('Legend position', 'nextora')}
                            value={legendPosition}
                            options={[
                                { label: __('Top', 'nextora'), value: 'top' },
                                { label: __('Bottom', 'nextora'), value: 'bottom' },
                                { label: __('Left', 'nextora'), value: 'left' },
                                { label: __('Right', 'nextora'), value: 'right' },
                            ]}
                            onChange={(v) =>
                                setAttributes({ legendPosition: v as ChartAttributes['legendPosition'] })
                            }
                            __next40pxDefaultSize
                        />
                    )}
                    <ToggleControl
                        label={__('Show tooltip', 'nextora')}
                        checked={showTooltip}
                        onChange={(v) => setAttributes({ showTooltip: v })}
                    />
                    <RangeControl
                        label={__('Chart height', 'nextora')}
                        value={chartHeight}
                        onChange={(v) => setAttributes({ chartHeight: v ?? 400 })}
                        min={200}
                        max={800}
                        step={10}
                        __next40pxDefaultSize
                    />
                </PanelBody>

                <PanelColorSettings
                    enableAlpha
                    title={__('Colors', 'nextora')}
                    colorSettings={[
                        {
                            value: lineColor ?? '',
                            onChange: (v) => setAttributes({ lineColor: v }),
                            label: __('Line / Bar color', 'nextora'),
                        },
                        {
                            value: fillColor ?? '',
                            onChange: (v) => setAttributes({ fillColor: v }),
                            label: __('Fill color', 'nextora'),
                        },
                        {
                            value: textColor ?? '',
                            onChange: (v) => setAttributes({ textColor: v }),
                            label: __('Text & label color', 'nextora'),
                        },
                        {
                            value: gridColor ?? '',
                            onChange: (v) => setAttributes({ gridColor: v }),
                            label: __('Grid line color', 'nextora'),
                        },
                    ]}
                />

                <PanelBody title={__('Grid & Axis', 'nextora')} initialOpen={false}>
                    <ToggleControl
                        label={__('Show X grid lines', 'nextora')}
                        checked={showXGrid}
                        onChange={(v) => setAttributes({ showXGrid: v })}
                    />
                    <ToggleControl
                        label={__('Show Y grid lines', 'nextora')}
                        checked={showYGrid}
                        onChange={(v) => setAttributes({ showYGrid: v })}
                    />
                    <ToggleControl
                        label={__('Show X-axis labels', 'nextora')}
                        checked={showXTickLabels}
                        onChange={(v) => setAttributes({ showXTickLabels: v })}
                    />
                    <ToggleControl
                        label={__('Show Y-axis labels', 'nextora')}
                        checked={showYTickLabels}
                        onChange={(v) => setAttributes({ showYTickLabels: v })}
                    />
                </PanelBody>

                <PanelBody title={__('Animation', 'nextora')} initialOpen={false}>
                    <ToggleControl
                        label={__('Animate on scroll', 'nextora')}
                        help={__(
                            'Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.',
                            'nextora'
                        )}
                        checked={enableScrollAnimation}
                        onChange={(v) => setAttributes({ enableScrollAnimation: v })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {!hasData ? (
                    <div className="nextora-chart-editor__placeholder">
                        {__('Add data points in the sidebar to preview the chart.', 'nextora')}
                    </div>
                ) : (
                    <div className="nextora-chart-editor__preview">
                        <div className="nextora-chart-editor__preview-header">
                            <span className="nextora-chart-editor__preview-title">
                                {chartTypeLabel}
                            </span>
                        </div>
                        <div className="nextora-chart-editor__preview-rows">
                            {dataPoints.map((dp) => (
                                <div key={dp.id} className="nextora-chart-editor__preview-row">
                                    <span className="nextora-chart-editor__preview-label">
                                        {dp.label}
                                    </span>
                                    <div className="nextora-chart-editor__preview-bar-track">
                                        <div
                                            className="nextora-chart-editor__preview-bar"
                                            style={{
                                                width: `${(dp.value / maxValue) * 100}%`,
                                                backgroundColor: lineColor || '#3b82f6',
                                            }}
                                        />
                                    </div>
                                    <span className="nextora-chart-editor__preview-value">
                                        {formatDisplayValue(dp.value)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
