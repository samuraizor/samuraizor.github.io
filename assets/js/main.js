function move(id){
	$('html, body').animate({scrollTop: $("#"+id).offset().top-40}, 2000);
	$(".navbar-nav li").removeClass("active");
	$(".navbar-nav li.bt-"+id).addClass("active");
};
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav li').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("marker"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
/*MAPS*/
var map, geocoder, infowindow, latlng;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#demo").html("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    $("#map").prop("latlng",position.coords.latitude + 
    "," + position.coords.longitude); 
	geocodeLatLng(geocoder, map, infowindow);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: -10.159841 , lng: -54.944315}
  });
  geocoder = new google.maps.Geocoder;
  infowindow = new google.maps.InfoWindow;

  
  getLocation();
}
function geocodeLatLng(geocoder, map, infowindow) {
  var input = $("#map").prop("latlng");
  var latlngStr = input.split(',', 2);
  latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
		map.setCenter(latlng);
		map.setZoom(18);
		
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });

}

/*Outras funções*/
function enviar(){
	
	
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
});