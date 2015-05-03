/* Typed script */
$(".typed-string").typed({
	strings: ["^800.^100.^100.", "^400Computer Scientist^150.", "^400Problem Solver^150.", "^400Gamer^500 :D", "^400Geek^600 ;P"],
	typeSpeed: 120,
	backSpeed: 80,
	backDelay: 800,
	loop: true
});
/* Masonry script */
var container = document.querySelector('.masonry-container');
var msnry = new Masonry(container, {
				itemSelector: ".panel--masonry",
				columnWidth: 2,
				isFitWidth: true
			});
imagesLoaded(container, function() {
	msnry.layout();
});
/* Onload fadein */
window.onload = function(e) {
	var threshold = 80;

	// threshold changes for mobile
	if ($(window).width() <= 480)
		threshold = 40;

	$(window).resize(function() {
		if ($(window).width() <= 480)
			threshold = 40;
	});

	// initially visible panels
	$(".invisible").each(function() {
		var topOfObject = $(this).offset().top;
		var bottomOfWindow = $(window).scrollTop()+$(window).height();
		if (bottomOfWindow > topOfObject+threshold) {
			$(this).addClass("visible").delay(2000).queue(function() {
				$(this).removeClass("invisible");
				$(this).removeClass("visible");
			});
		}
	});

	// switch to visible on scroll
	$(document).scroll(function(e) {
		e.stopPropagation();
		$(".invisible").each(function() {
			var topOfObject = $(this).offset().top;
			var bottomOfWindow = $(window).scrollTop()+$(window).height();
			if (bottomOfWindow > topOfObject+threshold) {
				$(this).addClass("visible").delay(2000).queue(function() {
					$(this).removeClass("invisible");
					$(this).removeClass("visible");
				});
			}
		});
	});
};
