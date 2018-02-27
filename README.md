# URI Custom Maps

URI Custom Maps is an implementation of [Leaflet.js](https://leafletjs.com).

Add the shortcode `[uri-map]` to intialize the map, and then add `[uri-map-point]` for each pin you'd like to drop.


## Attributes

### Initialize the map

The `[uri-map]` shortcode initializes the map.

**`zoom`** (num)(optional)  
Set the zoom level of the map (default: `9`)

**`lat`** (num)(optional)  
Set the latitude for the map center (default: `41.5977`)

**`lon`** (num)(optional)  
Set the longitude for the map center (default: `-71.5217`)

**`height`** (str)(optional)  
Set the height of the map, including units (default: `500px`)

### Add pins

To add a pin, use the `[uri-map-point]` shortcode with the following attributes.  You can add as many pins as you like.

**`lat`** (num)(optional)  
Set the latitude of the pin

**`lon`** (num)(optional)  
Set the longitude of the pin

**`title`** (num)(optional)  
Set a title for the pin popup

**`body`** (num)(optional)  
Set body text for the pin popup

**`img`** (num)(optional)  
Set the url of an image for the pin popup

**`link`** (num)(optional)  
Set a url to link from the pin popup

### Example
```
<!-- Initialize the map and add two pins -->
[uri-map]
[uri-map-point lat="41.4890" lon="-71.5245" title="Pin 1" body="The first example pin"]
[uri-map-point lat="41.4867" lon="-71.5293" title="Pin 2" body="The second example pin"]
```

## Plugin Details

Contributors: Brandon Fuller  
Tags: widgets  
Requires at least: 4.0  
Tested up to: 4.9  
Stable tag: 0.1  