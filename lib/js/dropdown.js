/*----------------------------------------------------------------------------
Navbar links dropdown
----------------------------------------------------------------------------*/

$(document).ready(function() {
	// initially hide dropdown for small screen
	if ($(window).width() <= 400)
		$(".dropdown").hide({duration: 0});
	// links are always visible for large screen
	else
		$(".dropdown").show({duration: 0});

	// resize event
	$(window).resize(function() {
		if ($(window).width() <= 400)
			$(".dropdown").hide({duration: 0});
		else
			$(".dropdown").show({duration: 0});
	});
});

// hover event
$(".navbar-links").hover(
	function() {
		if ($(window).width() <= 400)
			$(".dropdown").slideDown(); 
	},
	function() {
		if ($(window).width() <= 400)
			$(".dropdown").slideUp();
	}
);