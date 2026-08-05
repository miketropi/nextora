export type ChartType = 'line' | 'bar' | 'doughnut';

export type LegendPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ChartDataPoint {
    id: string;
    label: string;
    value: number;
}

export interface ChartAttributes {
    chartType: ChartType;
    dataPoints: ChartDataPoint[];
    showDataLabels: boolean;
    showLegend: boolean;
    legendPosition: LegendPosition;
    showTooltip: boolean;
    chartHeight: number;
    lineColor: string;
    fillColor: string;
    textColor: string;
    gridColor: string;
    showXGrid: boolean;
    showYGrid: boolean;
    showXTickLabels: boolean;
    showYTickLabels: boolean;
    enableScrollAnimation: boolean;
}
