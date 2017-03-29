function inicio(){
	$(".inicio").css("display","block");
	$(".seg").css("display","none");
	$(".fail2").css("display","none");
	$(".fim").css("display","none");
	$(".fail1").css("display","none");
}
function mudaSim(){
	$(".inicio").css("display","none");
	$(".seg").css("display","block");
	$(".fail2").css("display","none");
	$(".fim").css("display","none");
	$(".fail1").css("display","none");
}
function mudaAta(){
	$(".inicio").css("display","none");
	$(".seg").css("display","none");
	$(".fail2").css("display","none");
	$(".fim").css("display","none");
	$(".fail1").css("display","block");
}
function mudaShow(){
	$(".inicio").css("display","none");
	$(".seg").css("display","none");
	$(".fail2").css("display","none");
	$(".fim").css("display","block");
	$(".fail1").css("display","none");
}
function mudaFon(){
	$(".inicio").css("display","none");
	$(".seg").css("display","none");
	$(".fail2").css("display","block");
	$(".fim").css("display","none");
	$(".fail1").css("display","none");
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $("#demo").html("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    $("#demo").html("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
}
