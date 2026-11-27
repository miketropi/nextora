<?php

/** Standalone regression checks for imported Box Image template 6 media. */

declare( strict_types=1 );

function wp_get_attachment_url( int $id ): string|false {
	return 10 === $id ? 'https://example.test/uploads/photo.jpg' : false;
}
function wp_get_attachment_image_src( int $id, string $size ): array|false {
	return 10 === $id ? array( 'https://example.test/uploads/photo-768x512.jpg', 768, 512 ) : false;
}
function attachment_url_to_postid( string $url ): int {
	return 'https://example.test/uploads/photo-300x200.jpg' === $url ? 10 : 0;
}
function wp_get_attachment_image( int $id, string $size, bool $icon, array $attributes ): string {
	return 10 === $id ? '<img src="attachment-10" srcset="responsive" alt="Attachment alt" />' : '';
}
function esc_url( string $url ): string {
	return htmlspecialchars( $url, ENT_QUOTES, 'UTF-8' );
}

require dirname( __DIR__ ) . '/blocks/box-image/image-media.php';

$tests = array(
	'matching attachment' => array( 10, 'https://example.test/uploads/photo.jpg', 'attachment-10' ),
	'cached attachment url' => array( 10, 'https://example.test/uploads/photo.jpg?v=1', 'attachment-10' ),
	'attachment size' => array( 10, 'https://example.test/uploads/photo-768x512.jpg', 'attachment-10' ),
	'other registered size' => array( 10, 'https://example.test/uploads/photo-300x200.jpg', 'attachment-10' ),
	'attachment only' => array( 10, '', 'attachment-10' ),
	'missing imported id' => array( 123, 'https://live.test/new.jpg', 'https://live.test/new.jpg' ),
	'colliding imported id' => array( 10, 'https://live.test/new.jpg', 'https://live.test/new.jpg' ),
	'url only' => array( 0, 'https://live.test/new.jpg', 'https://live.test/new.jpg' ),
	'no image' => array( 0, '', '' ),
);
foreach ( $tests as $name => $case ) {
	[ $id, $url, $expected ] = $case;
	$html = nextora_box_image_render_template6_image( $id, $url );
	if ( ( '' === $expected && '' !== $html ) || ( '' !== $expected && ! str_contains( $html, $expected ) ) ) {
		fwrite( STDERR, "FAIL: {$name}\n" );
		exit( 1 );
	}
}
echo 'PASS: ' . count( $tests ) . " Box Image media cases.\n";
