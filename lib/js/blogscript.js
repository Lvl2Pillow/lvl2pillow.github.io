/*----------------------------------------------------------------------------
Fade in/out blog panels on scroll
----------------------------------------------------------------------------*/

$(document).ready(function() {
	// reduce length of blog titles
	$(".blog-panel").each(function() {
		var titleObj = $(this).find("h4").first();
		var title = titleObj.text();
		title = title.trim()
		if (title.length > 20) {
			titleObj.html(title.substring(0, 20)+"...");
		}
	});

	var threshold = 120;
	// initially visible blog panels
	$(".blog-panel").each(function() {
		var top_of_object = $(this).offset().top;
		var bottom_of_window = $(window).scrollTop()+$(window).height();
		if (bottom_of_window > top_of_object+threshold) {
			$(this).switchClass("invisible", "visible");
		}
	});
	// visible on scroll
	$(".scrollable").scroll(function() {
		$(".blog-panel").each(function() {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop()+$(window).height();
			if (bottom_of_window > top_of_object+threshold) {
				$(this).switchClass("invisible", "visible");
			}
		});
	});
});
