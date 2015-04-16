/*----------------------------------------------------------------------------
Fade in elements on scroll
----------------------------------------------------------------------------*/

$(document).ready(function() {
	var threshold = 120;

	// initially visible panels
	$(".panel.invisible").each(function() {
		var topOfObject = $(this).offset().top;
		var bottomOfWindow = $(window).scrollTop()+$(window).height();
		if (bottomOfWindow > topOfObject+threshold) {
			// switch invisible to visible
			$(this).removeClass("invisible");
			$(this).addClass("visible");
		}
	});

	// switch to visible on scroll
	$(document).scroll(function(e) {
		e.stopPropagation();
		$(".panel.invisible").each(function() {
			var topOfObject = $(this).offset().top;
			var bottomOfWindow = $(window).scrollTop()+$(window).height();
			if (bottomOfWindow > topOfObject+threshold) {
				$(this).removeClass("invisible");
				$(this).addClass("visible");
			}
		});
	});
});
