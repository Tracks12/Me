/**
 * Auteur : CARDINAL Florian
 * Date   : 22/12/2018 17:19
 * Page   : script.js
 */

"use strict";

/**
 * Importation des modules
 */
import "/scripts/jquery-3.5.1.min.js";
import "/scripts/scrolly.js";
import Anim from "/scripts/anim.js";
import Tools from "/scripts/tools.js";
import credit from "/scripts/credit.js";
import XHR from "/scripts/xhr.js";

const particlesParameters = {
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
};

/**
 * change root css contrast color value
 */
function randColor() {
	let colors = [
		"00AAAA",
		"AA00AA",
		"AAAA00",
		"CC3300",
		"22CC00",
		"0055CC"
	];

	let choice = `#${colors[Math.floor(Math.random() * colors.length)]}`;

	$(':root').css('--contrast', choice);
}

/**
 * Format title of portfolio items
 */
function portfolioTitleFormat() {
	for(let j = 0; j < $('#portfolio ul li a p').length; j++) {
		let temp = $('#portfolio ul li a p')[j].innerText.split('-'),
				txt = '';

		for(let i = 0; i < temp.length; i++) {
			let space = (!i) ? '' : ' ';
			txt = txt+space+temp[i];
		}

		$('#portfolio ul li a p')[j].innerText = txt;
	}
}

/**
 * make a button to go on top of site
 */
function toScroll() {
	let coef = $('html')[0].scrollTop / $('html')[0].scrollHeight;

	if(Tools.range(coef, .05, .9))
		$('#upper').fadeIn()

	else
		$('#upper').fadeOut();
}

/**
 * changes the color theme according to the time of day
 * @param {int} hour the hour of time
 */
function theme(hour) {
	if(Tools.range(hour, 0, 8) || Tools.range(hour, 20, 24))
		$('#theme').attr('href', '/styles/theme/dark.css');

	else
		$('#theme').attr('href', '/styles/theme/light.css');
}

$(document).ready(() => {
	let time = new Date();

	document['author'] = "CARDINAL Florian";
	document['authorAlias'] = "Anarchy";

	// Initiate clock
	Anim.startTime();

	// Dynamic Theme
	theme(time.getHours());

	// Nav Bar
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

	$('section').click(() => {
		if($(window).width() < 720)
			$('nav ul').slideUp();
	});

	$(window).resize(() => {
		if($(window).width() > 720)
			$('nav ul').removeAttr('style');
	});

	// Format portfolio title box
	portfolioTitleFormat();

	// Contact form
	$('#contact form').submit((e) => {
		e.preventDefault();
		$('#contact .error').empty()
		let post = $('#contact form').serialize();

		XHR.contact(post);
	});

	// conjure up and vanish the "go up" button
	toScroll();
	$(document).on('scroll', () => toScroll());

	// animation of shell
	new Anim([
		$('#animate p')[0],
		$('#animate pre')[0]
	]);

	// function to generate animate frame on "particles-js" id box
	particlesJS('particles-js', particlesParameters);

	randColor();
	$('.scrolly').scrolly();

	XHR.getSkillsStatus();

	if( // 000webhost part specs
		document.location.hostname.includes("000webhostapp")
		&& ($("div").length > 47)
	)
		$("div:last").remove();

	credit();
});

/**
 * END
 */
