
$(document).ready(function(){

	$("header #hamburger").click(function(){
		$("header").toggleClass("open");
		if( $("header").hasClass("open") ) {
			$("header").css("height", 56 * $("header nav a").length);
		} else {
			$("header").css("height","");
		}
	});

	$(window).resize(function(){
		if( $(window).width() > 650 ) {
			$("header").css("height","").removeClass("open");
		}
	});

});