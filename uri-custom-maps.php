<?php
/*
Plugin Name: URI Custom Maps
Plugin URI: http://www.uri.edu
Description: A custom interactive map generator
Version: 1.0
Author: URI Web Communications
Author URI: 
@author: Brandon Fuller <bjcfuller@uri.edu>
*/

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');
	
	
/**
 * 
 */
function uri_custom_maps_shortcode($atts) {
    
    // Attributes
    $atts = shortcode_atts(
        array(
            'data' => '',
            'zoom' => 9,
            'lat' => 41.7073,
            'lon' => -71.5217,
            'height' => '600px'
        ), $atts
    );

    echo '
        <style>
            #map {
                height: ' . $atts['height'] .';
                margin-bottom: 2rem;
            }
        </style>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
    ';
    
    uri_custom_maps_scripts($atts);
    
    echo '<div id="map"></div>';
		
}
add_shortcode( 'uri-map', 'uri_custom_maps_shortcode' );


function uri_custom_maps_scripts($atts) {
    
	wp_register_script( 'uri-custom-maps-js', plugins_url( '/custom-maps.js', __FILE__ ) );
	wp_localize_script( 'uri-custom-maps-js', 'URICustomMaps', $atts );
    wp_enqueue_script( 'uri-custom-maps-js' );

}
