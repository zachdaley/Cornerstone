$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});

	$('.googleMap').ClassyMap();

}); 
