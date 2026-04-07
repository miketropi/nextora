<?php
/**
 * Theme header (classic template).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>
<body <?php body_class( 'nextora antialiased bg-base text-contrast' ); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
	<?php block_template_part( 'header' ); ?>
</header>
