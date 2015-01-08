
$(document).ready(function(){
	
	$("head").append("<meta name='viewport' content='initial-scale=1, maximum-scale=1'>");

	$("header #hamburger").click(function(){
		$("header").toggleClass("open");
		if( $("header").hasClass("open") ) {
			$("header").css("height", 56 * $("header nav a").length);
		} else {
			$("header").css("height","");
		}
	});

	$(window).resize(function(){
		if( $(window).width() > 768 ) {
			$("header").css("height","").removeClass("open");
		}
		if( $(window).height() < $("#content").outerHeight() ) {
			$("#content").addClass("rel");
		} else {
			$("#content").removeClass("rel");
		}
	});
	
	$("header #social #github").click(function(){
		document.location = "//github.com/Zyluss";
	});
	$("header #social #twitter").click(function(){
		document.location = "//twitter.com/Zyluss_";	
	});

	$(window).load(function(){
		if( $(window).height() < $("#content").height() ) {
			$("#content").addClass("rel");
		}
	});
	

});
