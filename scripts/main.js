/**
 * Auteur : CARDINAL Florian
 * Date   : 22/12/2018 17:19
 * Page   : script.js
 */

class anim {
	constructor() {
		let output = new Array($('#animate p')[0], $('#animate pre')[0]),
			data = new Array(output[0].innerText, output[1].innerText);

		for(let i = 0; i < output.length; i++)
			output[i].innerText = '';

		anim.text(output[0], data[0], 0, () => anim.frame(output[1], data[1], 0));
	}

	static text(x, y, z, func) {
		let timer = 100;

		if(z < 15)
			timer = 0;

		x.innerHTML += y[z];
		z++;

		if(z < y.length)
			setTimeout(() => anim.text(x, y, z, func), timer);

		else
			setTimeout(func, timer+400);
	}

	static frame(x, y, z) {
		x.innerHTML += y.split('\n')[z]+'\n';
		z++;

		if(z < y.split('\n').length)
			setTimeout(() => anim.frame(x, y, z), 100);
	}

	static startTime(sep) {
		let today = new Date(), delay = 500;
		let h = today.getHours(), m = today.getMinutes(), s = '';

		if(h < 10)
			h = `0${h}`;

		if(m < 10)
			m = `0${m}`;

		if(!($(window).width() < 720)) {
			s = today.getSeconds();
			sep = ":";

			if(s < 10)
				s = `0${s}`;

			s = `:${s}`;
		}

		else {
			delay = 1000;

			if(sep === ":")
				sep = " ";

			else
				sep = ":";
		}

		$('#time').html(h+sep+m+s);
		setTimeout(() => anim.startTime(sep), delay);
	}
}

function skillsBar(skill) {
	for(let i = 0; i < skill.length; i++) {
		$(`#${skill[i][0]} h5`)[0].innerText += ` ${skill[i][1]}`;
		$(`#${skill[i][0]} .progress`)[0].style.width = skill[i][1];
	}
}

function toScroll() {
	let coef = $('html')[0].scrollTop/$('html')[0].scrollHeight;

	if(coef > .9)
		$('#upper').fadeOut();

	else if(coef > .05)
		$('#upper').fadeIn();

	else
		$('#upper').fadeOut();
}

function theme() {
	let h = new Date().getHours();

	if(tools.range(h, 0, 8) || tools.range(h, 20, 24))
		$('head').append('<link rel="stylesheet" type="text/css" href="/styles/theme/dark.css">');
}

$(document).ready(() => {
	document['author'] = "CARDINAL Florian";
	document['authorAlias'] = "Anarchy";

	theme();

	$('nav div').click(() => {
		$('nav ul').slideToggle();
		$('nav ul ul').css('display', 'none');
	});

	$('nav ul li').click(function() {
		if($(window).width() < 720)
			$(this)
				.find('ul')
				.slideToggle();
	});

	$(window).resize(function() {
		if($(window).width() > 720)
			$('nav ul').removeAttr('style');
	});

	for(let j = 0; j < $('#portfolio ul li a p').length; j++) {
		let temp = $('#portfolio ul li a p')[j].innerText.split('-'),
		    txt = '';

		for(let i = 0; i < temp.length; i++) {
			let space = ' ';

			if(!i)
				space = '';

			txt = txt+space+temp[i];
		}

		$('#portfolio ul li a p')[j].innerText = txt;
	}

	$('#contact form').submit(function(e) {
		e.preventDefault();
		$('#contact .error').empty()
		var post = $('#contact form').serialize();

		$.ajax({
			type: 'POST',
			url: '/?contact',
			data: post,
			dataType: 'json',
			success: (result) => {
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
	$(document).on('scroll', () => toScroll());
	$('div')[$('div').length-1].style.display = "none";

	new anim();

	particlesJS('particles-js', {
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": { "value": "#EEEEEE" },
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				}
			},
			"opacity": {
				"value": 1,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": .1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": .1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#EEEEEE",
				"opacity": 1,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": { "opacity": 1 }
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": { "distance": 200 },
				"push": { "particles_nb": 4 },
				"remove": { "particles_nb": 2 }
			}
		},
		"retina_detect": true
	});

	credit();
});

/**
 * END
 */
