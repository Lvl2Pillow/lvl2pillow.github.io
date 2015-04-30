
$(document).ready(function() {
	$(".panel p:nth-child(2)").each(function() {
		$(this).css("opacity", "0");
	});
});

// reveal/hide more info in panel
$(".panel").hover(function() {
		$moreInfo = $(this).find("p:nth-child(2)");
		$moreInfo.slideDown().animate({opacity: 1}, { duration: 600, queue: false } );
	},
	function() {
		$moreInfo = $(this).find("p:nth-child(2)");
		$moreInfo.slideUp().animate({opacity: 0}, { duration: 600, queue: false});
	}
);