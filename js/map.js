function init_map(){
	var myOptions = {
		zoom:15,center:new google.maps.LatLng(51.51300829799112,-0.3040710464800922),
	mapTypeId: google.maps.MapTypeId.ROADMAP};
	map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(51.51300829799112,-0.3040710464800922)});
	infowindow = new google.maps.InfoWindow({content:'<strong>Sent-Box</strong><br>London, United Kingdom<br>'});
	google.maps.event.addListener(marker, 'click', 
	
function(){
		infowindow.open(map,marker);});infowindow.open(map,marker);
	}
		google.maps.event.addDomListener(window, 'load', init_map);