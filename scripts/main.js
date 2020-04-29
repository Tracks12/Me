/**
 * Auteur : CARDINAL Florian
 * Date   : 22/12/2018 17:19
 * Page   : script.js
 */

/**
 * make the progress of skillbars
 * @param {array} skill skill target with percent
 */
function skillsBar(skill) {
	for(let i = 0; i < skill.length; i++) {
		$(`#${skill[i][0]} h5`)[0].innerText += ` ${skill[i][1]}`;
		$(`#${skill[i][0]} .progress`)[0].style.width = skill[i][1];
	}
}

/**
 * Format title of portfolio items
 */
function portfolioTitleFormat() {
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
}

/**
 * make a button to go on top of site
 */
function toScroll() {
	let coef = $('html')[0].scrollTop/$('html')[0].scrollHeight;

	if(coef > .9)
		$('#upper').fadeOut();

	else if(coef > .05)
		$('#upper').fadeIn();

	else
		$('#upper').fadeOut();
}

/**
 * changes the color theme according to the time of day
 */
function theme() {
	let h = new Date().getHours();

	if(tools.range(h, 0, 8) || tools.range(h, 20, 24))
		$('#theme').attr('href', '/styles/theme/dark.css');

	else
		$('#theme').attr('href', '/styles/theme/light.css');
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

	$(window).resize(() => {
		if($(window).width() > 720)
			$('nav ul').removeAttr('style');
	});

	portfolioTitleFormat();

	$('#contact form').submit((e) => {
		e.preventDefault();
		$('#contact .error').empty()
		var post = $('#contact form').serialize();

		xhr.contact(post);
	});

	toScroll();
	$(document).on('scroll', () => toScroll());
	$('div')[$('div').length-1].style.display = "none";

	new anim();

	/**
	 * function to generate animate frame on "particles-js" id box
	 */
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

	$('.scrolly').scrolly();
});

/**
 * END
 */
