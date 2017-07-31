(function() {
    
    //console.log(URICustomMaps);

	var map, mapbox, markers;
	mapbox = {
		token : 'pk.eyJ1IjoianBlbm55cGFja2VyIiwiYSI6ImNpeGs3NzZmMDAwMjUzM2xqZzQ1OXd4cmQifQ.BWgYC3LTTuBpnqito9pPrA'
    };
	markers = [];
    	
	window.addEventListener('load', initMap, false);

	function initMap() {
		var corner1 = L.latLng(90, 180), corner2 = L.latLng(-90, -180), bounds = L.latLngBounds(corner1, corner2);
		
		map = L.map('map', {
			maxBounds: bounds
		}).setView([URICustomMaps.lat, URICustomMaps.lon], URICustomMaps.zoom);
		
		L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapbox.token, {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets-basic',
			accessToken: mapbox.token,
		}).addTo(map);
								
		loadPoints();
	}

	function loadPoints() {
		loadJSON(URICustomMaps.data, addPoints);
	}

	function addPoints(data) {
		var m, entries;
        //console.log(data);
                        
        data.feed.entry.forEach(function(e) {
            m = L.marker([e.gsx$lat.$t, e.gsx$lon.$t]).addTo(map);
            m.bindPopup(createPopText(e));
            markers.push(m);
        });
        
	}
	
	function createPopText(e) {
		var s = '';
		
        s += '<img class="map-popup-image" src="' + e.gsx$image.$t + '">';
		s += '<h3 class="map-popup-title">' + e.gsx$title.$t + '</h3>';
		s += '<p class="map-popup-body">' + e.gsx$body.$t + '</p>';
		s += '<a class="map-popup-link" href="' + e.gsx$link.$t + '">More</a>';
		
		return s;
	}

	function loadJSON(id, callback) {   
		var xobj = new XMLHttpRequest(),
            url = "https://spreadsheets.google.com/feeds/list/" + id + "/od6/public/values?alt=json";
        
		xobj.overrideMimeType("application/json");
		xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
				// Required use of an anonymous callback as .open will NOT return a 
				// value but simply returns undefined in asynchronous mode
				callback(JSON.parse(xobj.responseText));
			} else {
				// @todo: add code for error condition
			}
		};
		xobj.send(null);  
	}

})();