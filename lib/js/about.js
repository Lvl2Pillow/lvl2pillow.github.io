/*----------------------------------------------------------------------------
Typed
----------------------------------------------------------------------------*/

$(function(){
	$(".typed-string").typed({
		strings: ["^800.^100.^100.", "^400Computer Scientist^150.", "^400Problem Solver^150.", "^400Gamer^500 :D", "^400Geek^600 ;P"],
		typeSpeed: 120,
		backSpeed: 80,
		backDelay: 800,
		loop: true
	});
});

/*----------------------------------------------------------------------------
Masonry
----------------------------------------------------------------------------*/

var container = document.querySelector(".tile-container");
var msnry = new Masonry( container, {
	columnWidth: 10,
	gutter: 8,		// horizontal width between elements
	itemSelector: ".tile"
});
