$(document).ready(function() {
	var $window = $(window);

	$('section[data-type="background"]').each(function(){
		// background object
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data("speed"));
			var coords = '80%' + yPos +'px'
			$bgobj.css({backgroundPosition: coords});
		});
	});
});