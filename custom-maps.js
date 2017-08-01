(function() {
    
    //console.log(URICustomMaps);

	var map, mapbox, markers;
	mapbox = {
        id: 'mapbox.streets-basic',
        el: 'uri-custom-map',
		token : 'pk.eyJ1IjoianBlbm55cGFja2VyIiwiYSI6ImNpeGs3NzZmMDAwMjUzM2xqZzQ1OXd4cmQifQ.BWgYC3LTTuBpnqito9pPrA'
    };
	markers = [];
    	
	window.addEventListener('load', initMap, false);

	function initMap() {
		var corner1 = L.latLng(90, 180), corner2 = L.latLng(-90, -180), bounds = L.latLngBounds(corner1, corner2);
		
        document.getElementById(mapbox.el).style.height = URICustomMaps.height;
        
		map = L.map('uri-custom-map', {
			maxBounds: bounds
		}).setView([URICustomMaps.lat, URICustomMaps.lon], URICustomMaps.zoom);
		
		L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapbox.token, {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: mapbox.id,
			accessToken: mapbox.token,
		}).addTo(map);
					
		loadPoints();
	}

	function loadPoints() {
		var points = document.querySelectorAll('.uri-custom-map-point');
        points.forEach(function(e){
            e.style.display = 'none';
        });
        addPoints(points);
	}

	function addPoints(p) {
		var m, entries;
                        
        p.forEach(function(e) {
            m = L.marker([e.getAttribute('data-lat'), e.getAttribute('data-lon')]).addTo(map);
            m.bindPopup(e.innerHTML);
            markers.push(m);
        });
        
	}

})();