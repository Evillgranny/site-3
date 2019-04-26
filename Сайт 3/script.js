$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});

	$('#showall').click(function(){
		$('.post').show(500);
	});
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:8
  });
});

if ($(window).width() < 420) {
	 $(".owl-carousel").owlCarousel({
  	items:3
  });
}

if ($(window).width() < 568) {
	 $(".owl-carousel").owlCarousel({
  	items:4
  });
}
if ($(window).width() < 786) {
	 $(".owl-carousel").owlCarousel({
  	items:6
  });
}

