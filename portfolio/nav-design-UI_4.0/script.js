function menu() {
	$('nav ul ul').css({ display: 'none' });
	
	$('nav ul .item .btn').click(function() {
		$('nav ul ul').slideUp();
		$(this).parent('li').find('ul').slideToggle();
	});
}
