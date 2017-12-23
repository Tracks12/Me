$(function() {
	$('.navbar a, footer a').on('click', function(event) {
		event.preventDefault();
		var hash = this.hash;
		$('body').animate({ scrollTop: $(hash).offset().top }, 500, function() { window.location.hash = hash; });
	});
	$('#contactForm').submit(function(e) {
		e.preventDefault();
		$('.comments').empty();
		var post = $('#contactForm').serialize();
		
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: post,
			dataType: 'json',
			success: function(result) {
				if(result.passed) {
					$('.ty').css('display', 'block');
					$('#contactForm')[0].reset();
				}
				else {
					$('#prenom + .comments').html(result.prenomError);
					$('#nom + .comments').html(result.nomError);
					$('#mail + .comments').html(result.mailError);
					$('#tel + .comments').html(result.telError);
					$('#msg + .comments').html(result.msgError);
				}
			}
		});
	});
});
