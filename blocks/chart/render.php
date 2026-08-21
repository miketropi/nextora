<?php
declare( strict_types=1 );

/**
 * Resolve a colour value (preset slug or hex) to an actual hex colour for Chart.js.
 */
if ( !function_exists( 'nextora_chart_resolve_color' ) ) {
function nextora_chart_resolve_color( ?string $color ): string {
    if ( $color === null || $color === '' ) {
        return '';
    }

    $color = trim( $color );

    // Already a hex colour
    if ( preg_match( '/^#[a-fA-F0-9]{3,8}$/', $color ) ) {
        return $color;
    }

    // Try to resolve as a theme preset slug
    $settings = wp_get_global_settings();
    $palette = $settings['color']['palette']['theme'] ?? array();

    foreach ( $palette as $item ) {
        if ( ( $item['slug'] ?? '' ) === $color ) {
            return $item['color'] ?? $color;
        }
    }

    // Try default palette (core presets)
    $default_palette = $settings['color']['palette']['default'] ?? array();
    foreach ( $default_palette as $item ) {
        if ( ( $item['slug'] ?? '' ) === $color ) {
            return $item['color'] ?? $color;
        }
    }

    return $color;
}
} // end function_exists('nextora_chart_resolve_color')

/**
 * Convert a hex colour to rgba with given alpha.
 */
if ( !function_exists( 'nextora_chart_hex_to_rgba' ) ) {
function nextora_chart_hex_to_rgba( string $hex, float $alpha = 1.0 ): string {
    $hex = ltrim( $hex, '#' );
    if ( strlen( $hex ) === 3 ) {
        $hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
    }
    if ( strlen( $hex ) !== 6 ) {
        return $hex;
    }
    $r = hexdec( substr( $hex, 0, 2 ) );
    $g = hexdec( substr( $hex, 2, 2 ) );
    $b = hexdec( substr( $hex, 4, 2 ) );
    return "rgba({$r},{$g},{$b},{$alpha})";
}
} // end function_exists('nextora_chart_hex_to_rgba')

/**
 * Parse a value that may include suffix notation (1M, 500K, 2B)
 * or thousand separators (1,000,000 or 1.000.000).
 */
if ( !function_exists( 'nextora_chart_parse_number' ) ) {
function nextora_chart_parse_number( mixed $value ): float {
    if ( is_float( $value ) || is_int( $value ) ) {
        return (float) $value;
    }

    $str = trim( (string) $value );
    if ( $str === '' ) {
        return 0.0;
    }

    $upper = strtoupper( $str );

    // Suffix notation: "1M", "1.5M", "500K", "2B", "1T"
    if ( preg_match( '/^([\d.,]+)\s*([KMBT])$/', $upper, $m ) ) {
        $rawNum   = $m[1];
        $suffix   = $m[2];
        $dotCount = substr_count( $rawNum, '.' );
        $commaCount = substr_count( $rawNum, ',' );

        if ( $dotCount + $commaCount > 1 ) {
            // Multiple separators → thousand separators → strip all
            $clean = (float) str_replace( array( ',', '.' ), '', $rawNum );
        } else {
            // Single separator with suffix → treat as decimal
            $clean = (float) str_replace( ',', '.', $rawNum );
        }

        return match ( $suffix ) {
            'K' => $clean * 1_000,
            'M' => $clean * 1_000_000,
            'B' => $clean * 1_000_000_000,
            'T' => $clean * 1_000_000_000_000,
        };
    }

    // No suffix — detect thousand separators vs decimal
    if ( preg_match( '/^\\d{1,3}(?:[.,]\\d{3})+(?:[.,]\\d{1,2})?$/', $str ) ) {
        // Looks thousand-separated: e.g. 1,000,000 or 1.000.000
        if ( preg_match( '/^([\\d.,]+?)(?:[.,](\\d{1,2}))?$/', $str, $dm ) ) {
            $whole = str_replace( array( ',', '.' ), '', $dm[1] );
            $frac  = $dm[2] ?? '';
            return (float) ( $frac !== '' ? "{$whole}.{$frac}" : $whole );
        }
    }

    // Simple decimal or plain number — replace comma with dot
    $clean = str_replace( ',', '.', $str );
    if ( is_numeric( $clean ) ) {
        return (float) $clean;
    }

    // Last resort: strip non-numeric chars except minus/dot
    $clean = preg_replace( '/[^\\d.\\-]/', '', $str );
    return is_numeric( $clean ) ? (float) $clean : 0.0;
}
} // end function_exists('nextora_chart_parse_number')

if ( !function_exists( 'nextora_chart_calc_y_max' ) ) {
/**
 * Calculate a nice Y-axis max ~10% above the largest data value.
 *
 * @param float[] $values
 */
function nextora_chart_calc_y_max( array $values ): ?float {
    $max = !empty( $values ) ? max( $values ) : 0;
    if ( $max <= 0 ) return null;

    $padded = $max * 1.1;

    $magnitude = pow( 10, floor( log10( $padded ) ) );
    $nice = ceil( $padded / $magnitude ) * $magnitude;

    return (float) $nice;
}
} // end function_exists('nextora_chart_calc_y_max')

if ( !function_exists( 'nextora_chart_build_config' ) ) {
/**
 * Build the Chart.js configuration array from block attributes.
 *
 * @param array<array-key, mixed> $attributes
 *
 * @return array<array-key, mixed>
 */
function nextora_chart_build_config( array $attributes ): array {
    $chart_type = $attributes['chartType'] ?? 'line';

    // --- Data points ---
    $data_points = $attributes['dataPoints'] ?? array();
    $labels   = array();
    $values   = array();
    foreach ( $data_points as $dp ) {
        $label = is_array( $dp ) ? ( $dp['label'] ?? '' ) : '';
        $raw_value = is_array( $dp ) ? ( $dp['value'] ?? 0 ) : 0;
        $value = nextora_chart_parse_number( $raw_value );
        $labels[] = $label;
        $values[] = $value;
    }

    // --- Colours ---
    $line_source = is_string( $attributes['lineColor'] ?? null ) ? trim( (string) $attributes['lineColor'] ) : '';
    $fill_source = is_string( $attributes['fillColor'] ?? null ) ? trim( (string) $attributes['fillColor'] ) : '';
    $text_source = is_string( $attributes['textColor'] ?? null ) ? trim( (string) $attributes['textColor'] ) : '';
    $grid_source = is_string( $attributes['gridColor'] ?? null ) ? trim( (string) $attributes['gridColor'] ) : '';

    $line_color = nextora_chart_resolve_color( $line_source );
    $fill_color = nextora_chart_resolve_color( $fill_source );
    $text_color = nextora_chart_resolve_color( $text_source );
    $grid_color = nextora_chart_resolve_color( $grid_source );

    // Fallback colours from theme tokens or sensible defaults
    if ( $line_color === '' ) {
        $line_color = '#3b82f6';
    }
    if ( $fill_color === '' ) {
        $fill_color = nextora_chart_hex_to_rgba( $line_color, 0.15 );
    }
    if ( $text_color === '' ) {
        $text_color = '#333333';
    }
    if ( $grid_color === '' ) {
        $grid_color = '#e5e5e5';
    }

    // --- Display options ---
    $show_data_labels = $attributes['showDataLabels'] ?? true;
    $show_legend      = $attributes['showLegend'] ?? true;
    $legend_position  = $attributes['legendPosition'] ?? 'top';
    $show_tooltip     = $attributes['showTooltip'] ?? true;
    $show_x_grid      = $attributes['showXGrid'] ?? true;
    $show_y_grid      = $attributes['showYGrid'] ?? true;
    $show_x_ticks     = $attributes['showXTickLabels'] ?? true;
    $show_y_ticks     = $attributes['showYTickLabels'] ?? true;

    // --- Doughnut data labels format ---
    $is_doughnut = $chart_type === 'doughnut';

    // --- Build dataset ---
    if ( $is_doughnut ) {
        $datasets = array( array(
            'label'            => '',
            'data'             => $values,
            'backgroundColor' => array_map( function ( $i ) use ( $line_color, $data_points ) {
                // Generate varied colours for doughnut slices
                $count = count( $data_points );
                if ( $count <= 1 ) {
                    return $line_color;
                }
                $hue_shift = ( 360 / $count ) * (int) $i;
                // Use simple colour variation by parsing and adjusting the main colour
                return nextora_chart_adjust_hue( $line_color, $hue_shift );
            }, array_keys( $data_points ) ),
            'borderColor'      => '#ffffff',
            'borderWidth'      => 2,
            'hoverOffset'      => 4,
        ) );
    } elseif ( $chart_type === 'bar' ) {
        $datasets = array( array(
            'label'            => '',
            'data'             => $values,
            'backgroundColor' => $line_color,
            'borderColor'      => nextora_chart_hex_to_rgba( $line_color, 0.8 ),
            'borderWidth'      => 1,
            'borderRadius'     => 4,
            'barPercentage'    => 0.7,
        ) );
    } else { // line
        $datasets = array( array(
            'label'                => '',
            'data'                 => $values,
            'borderColor'          => $line_color,
            'backgroundColor'      => $fill_color,
            'pointBackgroundColor' => $line_color,
            'pointBorderColor'     => '#ffffff',
            'pointBorderWidth'     => 2,
            'pointRadius'          => 5,
            'pointHoverRadius'     => 7,
            'tension'              => 0.3,
            'fill'                 => true,
            'borderWidth'          => 2,
        ) );
    }

    // --- Data labels plugin config ---
    $is_mobile = wp_is_mobile();
    $datalabels_display = $show_data_labels && !$is_mobile;

    if ( $is_doughnut ) {
        $datalabels_config = array(
            'display'  => $datalabels_display,
            'anchor'   => 'center',
            'align'    => 'center',
            'color'    => $text_color,
            'font'     => array(
                'weight' => '600',
                'size'   => 12,
            ),
            'offset'   => 0,
            'formatter' => '__NEXTORA_DOUGHNUT_FORMATTER__',
        );
    } else {
        $datalabels_config = array(
            'display'  => $datalabels_display,
            'anchor'   => 'end',
            'align'    => 'top',
            'color'    => $text_color,
            'font'     => array(
                'weight' => '600',
                'size'   => 12,
            ),
            'offset'   => 6,
            'formatter' => '__NEXTORA_NUMBER_FORMATTER__',
        );
    }

    // --- Build full config ---
    $config = array(
        'type' => $chart_type,
        'colorSources' => array(
            'line' => $line_source,
            'fill' => $fill_source,
            'text' => $text_source,
            'grid' => $grid_source,
        ),
        'data' => array(
            'labels'   => $labels,
            'datasets' => $datasets,
        ),
        'options' => array(
            'responsive'          => true,
            'maintainAspectRatio' => false,
            'plugins' => array(
                'legend' => array(
                    'display'  => $show_legend,
                    'position' => $legend_position,
                    'labels'   => array(
                        'color' => $text_color,
                        'font'  => array( 'size' => 12 ),
                        'padding' => 16,
                    ),
                ),
                'tooltip' => array(
                    'enabled' => $show_tooltip,
                ),
                'datalabels' => $datalabels_config,
            ),
        ),
    );

    // Scales for non-doughnut charts
    if ( !$is_doughnut ) {
        $config['options']['scales'] = array(
            'x' => array(
                'grid'  => array(
                    'display' => $show_x_grid,
                    'color'   => $show_x_grid ? $grid_color : 'transparent',
                ),
                'ticks' => array(
                    'display' => $show_x_ticks,
                    'color'   => $text_color,
                    'font'    => array( 'size' => 11 ),
                ),
            ),
            'y' => array(
                'grid'  => array(
                    'display' => $show_y_grid,
                    'color'   => $show_y_grid ? $grid_color : 'transparent',
                ),
                'ticks' => array(
                    'display' => $show_y_ticks,
                    'color'   => $text_color,
                    'font'    => array( 'size' => 11 ),
                ),
                'beginAtZero' => true,
                'max'       => nextora_chart_calc_y_max( $values ),
            ),
        );
    }

    return $config;
}
} // end function_exists('nextora_chart_build_config')

/**
 * Simple hue adjustment for doughnut slice colours.
 */
if ( !function_exists( 'nextora_chart_adjust_hue' ) ) {
function nextora_chart_adjust_hue( string $hex, float $hue_shift ): string {
    $hex = ltrim( $hex, '#' );
    if ( strlen( $hex ) === 3 ) {
        $hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
    }
    if ( strlen( $hex ) !== 6 ) {
        return '#' . $hex;
    }

    $r = hexdec( substr( $hex, 0, 2 ) ) / 255;
    $g = hexdec( substr( $hex, 2, 2 ) ) / 255;
    $b = hexdec( substr( $hex, 4, 2 ) ) / 255;

    $max = max( $r, $g, $b );
    $min = min( $r, $g, $b );
    $l   = ( $max + $min ) / 2;

    if ( $max === $min ) {
        $h = 0;
    } elseif ( $max === $r ) {
        $h = 60 * fmod( ( ( $g - $b ) / ( $max - $min ) ), 6 );
    } elseif ( $max === $g ) {
        $h = 60 * ( ( $b - $r ) / ( $max - $min ) + 2 );
    } else {
        $h = 60 * ( ( $r - $g ) / ( $max - $min ) + 4 );
    }

    $h = fmod( $h + $hue_shift + 360, 360 );

    $s = ( $max === $min ) ? 0 : ( $max - $min ) / ( 1 - abs( 2 * $l - 1 ) );

    // HSL to RGB
    $c = ( 1 - abs( 2 * $l - 1 ) ) * $s;
    $x = $c * ( 1 - abs( fmod( $h / 60, 2 ) - 1 ) );
    $m = $l - $c / 2;

    if ( $h < 60 ) {
        $rr = $c; $gg = $x; $bb = 0;
    } elseif ( $h < 120 ) {
        $rr = $x; $gg = $c; $bb = 0;
    } elseif ( $h < 180 ) {
        $rr = 0; $gg = $c; $bb = $x;
    } elseif ( $h < 240 ) {
        $rr = 0; $gg = $x; $bb = $c;
    } elseif ( $h < 300 ) {
        $rr = $x; $gg = 0; $bb = $c;
    } else {
        $rr = $c; $gg = 0; $bb = $x;
    }

    $r = (int) round( ( $rr + $m ) * 255 );
    $g = (int) round( ( $gg + $m ) * 255 );
    $b = (int) round( ( $bb + $m ) * 255 );

    return sprintf( '#%02x%02x%02x', $r, $g, $b );
}
} // end function_exists('nextora_chart_adjust_hue')

// --- Enqueue view script ---
$view_path    = __DIR__ . '/view.js';
$view_version = file_exists( $view_path ) ? (string) filemtime( $view_path ) : '1.0.0';
wp_enqueue_script(
	'nextora-chart-view',
	get_theme_file_uri( 'blocks/chart/view.js' ),
	array(),
	$view_version,
	true,
);

// --- Build config ---
/** @var array<array-key, mixed> $attributes */
$config      = nextora_chart_build_config( $attributes );
$config_json = wp_json_encode( $config, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) ?: '';

// --- Build wrapper attributes ---
$chart_type    = $attributes['chartType'] ?? 'line';
$chart_height  = $attributes['chartHeight'] ?? 400;
$enable_scroll = $attributes['enableScrollAnimation'] ?? true;

$wrapper_classes = 'wp-block-nextora-chart nextora-chart nextora-chart--type-' . $chart_type . ' nextora-chart--loading';
$wrapper_style   = '--nextora-chart-height:' . absint( $chart_height ) . 'px;';

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => $wrapper_classes,
    'style' => $wrapper_style,
) );

// Build data points for screen-reader table
$data_points = $attributes['dataPoints'] ?? array();

// --- Output ---
?>
<div
    <?php echo wp_kses_data( $wrapper_attributes ); ?>
    data-nextora-chart-config="<?php echo esc_attr( $config_json ); ?>"
    <?php if ( $enable_scroll ): ?>data-nextora-scroll-reveal="1"<?php endif; ?>
>
    <div class="nextora-chart__canvas-wrapper">
        <canvas class="nextora-chart__canvas"></canvas>
    </div>

    <div class="nextora-chart__sr-table">
        <table>
            <caption><?php echo esc_html__( 'Chart data', 'nextora' ); ?></caption>
            <thead>
                <tr>
                    <th scope="col"><?php echo esc_html__( 'Label', 'nextora' ); ?></th>
                    <th scope="col"><?php echo esc_html__( 'Value', 'nextora' ); ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ( $data_points as $dp ): ?>
                <tr>
                    <td><?php echo esc_html( is_array( $dp ) ? ( $dp['label'] ?? '' ) : '' ); ?></td>
                    <td><?php echo esc_html( is_array( $dp ) ? ( $dp['value'] ?? '' ) : '' ); ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
