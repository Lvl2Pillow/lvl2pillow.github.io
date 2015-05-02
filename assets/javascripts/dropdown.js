/*----------------------------------------------------------------------------
Navbar dropdown
----------------------------------------------------------------------------*/

$(document).ready(function() {
	// initially hide dropdown for small screen
	if ($(window).width() <= 480)
		$(".dropdown").hide({duration: 0});
	// links are always visible for large screen
	else
		$(".dropdown").show({duration: 0});

	// resize event
	$(window).resize(function() {
		if ($(window).width() <= 480)
			$(".dropdown").hide({duration: 0});
		else
			$(".dropdown").show({duration: 0});
	});

	// click event
	$(document).click(function() {
		if ($(window).width() <= 480)
			$(".dropdown").slideUp();
	});
	$("nav").click(function(e) {
		e.stopPropagation();
		var $dropdown = $(".dropdown");
		// toggle
		if ($dropdown.is(":visible"))
			$dropdown.slideUp(); 
		else
			$dropdown.slideDown(); 
	});
});
