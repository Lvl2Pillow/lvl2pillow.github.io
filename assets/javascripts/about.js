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
