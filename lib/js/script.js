
/*----------------------------------------------------------------------------
Typed
----------------------------------------------------------------------------*/

$(function(){
	$(".typed-string").typed({
		strings: ["^800.^100.^100.", "^400Computer Scientist^150.", "^400Problem Solver^150.", "^400Gamer^500 :D", "^400Geek^600 ;P"],
		typeSpeed: 100,
		backDelay: 800,
		loop: true,
		showCursor: true,
		cursorChar: '|',
		contentType: 'text'
	});
});

// hacky fix for cursor showing over navbar
$(document).ready(function() {
	var navbarHeight = 48;
	$(".scrollable").scroll(function() {
		var typedString = $(".typed-string").first();
		var top_of_object = $(typedString).offset().top;
		if (top_of_object < navbarHeight) {
			$(".typed-cursor").html("");
		}
		else {
			$(".typed-cursor").html("|");
		}
		
	});
});

/*----------------------------------------------------------------------------
Fade in/out blog panels on scroll
----------------------------------------------------------------------------*/

$(document).ready(function() {
	// reduce length of blog titles
	$(".tile").each(function() {
		var titleObj = $(this).find("h4").first();
		var title = titleObj.text();
		title = title.trim()
		if (title.length > 14) {
			titleObj.html(title.substring(0, 14)+"...");
		}
	});

	var threshold = 120;
	// initially visible blog panels
	$(".tile").each(function() {
		var top_of_object = $(this).offset().top;
		var bottom_of_window = $(window).scrollTop()+$(window).height();
		if (bottom_of_window > top_of_object+threshold) {
			$(this).switchClass("invisible", "visible");
		}
	});
	// visible on scroll
	$(".scrollable").scroll(function() {
		$(".tile").each(function() {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop()+$(window).height();
			if (bottom_of_window > top_of_object+threshold) {
				$(this).switchClass("invisible", "visible");
			}
		});
	});
});

/*----------------------------------------------------------------------------
Masonry
----------------------------------------------------------------------------*/

// var container = document.querySelector(".tile-container");
// var msnry = new Masonry( container, {
// 	// options
// 	columnWidth: 200,
// 	itemSelector: ".tile"
// });
