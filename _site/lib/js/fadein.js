/*----------------------------------------------------------------------------
Fade in elements on scroll
----------------------------------------------------------------------------*/

$(document).ready(function() {
	var threshold = 80;

	// threshold changes for mobile
	if ($(window).width() <= 640)
		threshold = 40;

	$(window).resize(function() {
		if ($(window).width() <= 640)
			threshold = 40;
	});

	// initially visible panels
	$(".invisible").each(function() {
		var topOfObject = $(this).offset().top;
		var bottomOfWindow = $(window).scrollTop()+$(window).height();
		if (bottomOfWindow > topOfObject+threshold) {
			$(this).css("opacity", 1);
		}
	});

	// switch to visible on scroll
	$(document).scroll(function(e) {
		e.stopPropagation();
		$(".invisible").each(function() {
			var topOfObject = $(this).offset().top;
			var bottomOfWindow = $(window).scrollTop()+$(window).height();
			if (bottomOfWindow > topOfObject+threshold) {
				$(this).css("opacity", 1);
			}
		});
	});
});
