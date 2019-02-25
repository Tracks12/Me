function menu() {
	$('nav div').click(function() {
		$('nav ul').slideToggle();
		$('nav ul ul').css('display', 'none');
	});
	
	$('nav ul li').click(function() {
		if($(window).width() < 720) {
			$('nav ul ul').slideUp();
			$(this).find('ul').slideToggle();
		}
	});
	
	$(window).resize(function() {
		if($(window).width() > 720) {
			$('nav ul').removeAttr('style');
		}
	});
}
