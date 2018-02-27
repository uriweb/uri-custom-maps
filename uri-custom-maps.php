<?php
/*
Plugin Name: URI Custom Maps
Plugin URI: http://www.uri.edu
Description: A custom interactive map generator
Version: 0.1
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
            'lat' => 41.5977,
            'lon' => -71.5217,
            'height' => '500px'
        ), $atts
    );

    echo '
        <style>
            #uri-custom-map {
                margin-bottom: 2rem;
            }
            .uri-custom-map-point img {
                max-width: 300px;
            }
        </style>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>
    ';
    
    uri_custom_maps_scripts($atts);
    
    echo '<div id="uri-custom-map"></div>';
		
}
add_shortcode( 'uri-map', 'uri_custom_maps_shortcode' );

function uri_custom_maps_point_shortcode($atts) {
    
    // Attributes
    extract( shortcode_atts(
        array(
            'lat' => '',
            'lon' => '',
            'title' => '',
            'body' => '',
            'img' => '',
            'link' => ''
            ), $atts
        )
    );
    
    $output = '<div class="uri-custom-map-point" data-lat="' . $lat . '" data-lon="' . $lon . '">';
    
    if(!empty($img)) {
        $output .= '<img src="' . $img . '">';
    }
    
    if(!empty($title)) {
        $output .= '<h3>' . $title . '</h3>';
    }
    
    if(!empty($body)) {
        $output .= '<p>' . $body . '</p>';
    }
    
    if(!empty($link)) {
        $output .= '<a href="' . $link . '" title="' . $title . '">Learn more</a>';
    }
    
    $output .= '</div>';
        
    return $output;
    
}
add_shortcode( 'uri-map-point', 'uri_custom_maps_point_shortcode' );
    
function uri_custom_maps_scripts($atts) {
    
	wp_register_script( 'uri-custom-maps-js', plugins_url( '/custom-maps.js', __FILE__ ) );
	wp_localize_script( 'uri-custom-maps-js', 'URICustomMaps', $atts );
    wp_enqueue_script( 'uri-custom-maps-js' );

}
