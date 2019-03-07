/********************************
*                               *
*   Auteur : CARDINAL Florian   *
*   Date   : 22/12/2018 17:19   *
*   Page   : script.js          *
*                               *
********************************/

class anim {
	constructor() {
		var output = new Array($('#animate p')[0], $('#animate pre')[0]),
		    data = new Array(output[0].innerText, output[1].innerText);
		
		for(var i = 0; i < output.length; i++) { output[i].innerText = ''; }
		
		anim.text(output[0], data[0], 0);
		setTimeout(function() { anim.frame(output[1], data[1], 0); }, 2250);
	}
	
	static text(x, y, z) {
		var timer = 100;
		if(z < 15) { timer = 0; }
		x.innerHTML += y[z];
		z++;
		if(z < y.length) { setTimeout(function() { anim.text(x, y, z); }, timer); }
	}
	
	static frame(x, y, z) {
		x.innerHTML += y.split('\n')[z]+'\n';
		z++;
		if(z < y.split('\n').length) { setTimeout(function() { anim.frame(x, y, z) }, 100); }
	}
	
	static startTime(sep) {
		var today = new Date(), delay = 500;
		var h = today.getHours(), m = today.getMinutes();
		if(h < 10) { h = '0'+h; }
		if(m < 10) { m = '0'+m; }
		if(!(document.body.clientWidth < 720)) {
			var sep = ":", s = today.getSeconds();
			if(s < 10) { s = '0'+s; }
			s = ":"+s;
		} else { var s = ''; delay = 1000; if(sep === ":") { sep = " "; } else { sep = ":"; }}
		$('#time')[0].innerHTML = h+sep+m+s;
		t = setTimeout(function() { anim.startTime(sep); }, delay);
	}
}

function skillsBar(skill) {
	for(var i = 0; i < skill.length; i++) {
		$('#'+skill[i][0]+' h5')[0].innerText += ' '+skill[i][1];
		$('#'+skill[i][0]+' .progress')[0].style.width = skill[i][1];
	}
}

function toScroll() {
	var coef = $('html')[0].scrollTop / $('html')[0].scrollHeight;
	if(coef > .85) { $('#upper').fadeOut(); }
	else if(coef > .05) { $('#upper').fadeIn(); }
	else { $('#upper').fadeOut(); }
}

$(document).ready(function() {
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
	
	for(j = 0; j < $('#portfolio ul li a p').length; j++) {
		var temp = $('#portfolio ul li a p')[j].innerText,
		    temp = temp.split('-'),
		    txt = '';
		
		for(var i = 0; i < temp.length; i++) {
			var space = ' ';
			if(!i) { space = ''; }
			txt = txt+space+temp[i];
		} $('#portfolio ul li a p')[j].innerText = txt;
	}
	
	$('#contact form').submit(function(e) {
		e.preventDefault();
		$('#contact .error').empty()
		var post = $('#contact form').serialize();
		
		$.ajax({
			type: 'POST',
			url: './contact.php',
			data: post,
			dataType: 'json',
			success: function(result) {
				if(result.passed) {
					$('#contact .ty').css('display', 'block');
					$('#contact form')[0].reset();
				}
				else {
					$('#contact #fName .error').html(result.error.fname);
					$('#contact #name .error').html(result.error.name);
					$('#contact #mail .error').html(result.error.mail);
					$('#contact #phone .error').html(result.error.tel);
					$('#contact #msg .error').html(result.error.msg);
				}
			}
		});
	});
	
	toScroll();
	$(document).on('scroll', function() { toScroll(); });
	
	new anim();
});

/**********
*   END   *
**********/
