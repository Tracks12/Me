/**
 * Auteur : CARDINAL Florian
 * Date   : 22/04/2020 01:48
 * Page   : anim.js
 */

"use strict";

/**
 * Animation abstract class
 */
class anim {
	/**
	 * take html value of <p> & <pre> of #animate to make typing animation
	 * @param {array} output [<p> object html, <pre> object html]
	 */
	constructor(output) {
		let data = [];

		for(let i = 0; i < output.length; i++) {
			data.push(output[i].innerText);
			output[i].innerText = '';
		}

		anim.text(output[0], data[0], 0, () => anim.frame(output[1], data[1], 0));
	}

	/**
	 * instant writer
	 * @param {object} x html object to apply animation
	 * @param {string} y text for animation
	 * @param {int} z animation position
	 * @param {function} func callback function
	 */
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

	/**
	 * instant liner
	 * @param {object} x html object to apply animation
	 * @param {string} y text to animation
	 * @param {int} z animation position
	 */
	static frame(x, y, z) {
		x.innerHTML += y.split('\n')[z]+'\n';
		z++;

		if(z < y.split('\n').length)
			setTimeout(() => anim.frame(x, y, z), 100);
	}

	/**
	 * show instant timer clock
	 * @param sep separator of timer
	 */
	static startTime(sep) {
		let today = new Date(), delay = 500;
		let h = today.getHours(), m = today.getMinutes(), s = '';

		h = (h < 10) ? `0${h}` : h;
		m = (m < 10) ? `0${m}` : m;

		if(!($(window).width() < 720)) {
			s = today.getSeconds();
			sep = ":";
			s = (s < 10) ? `:0${s}` : `:${s}`;
		}

		else {
			delay = 1000;
			sep = (sep === ':') ? ' ' : ':';
		}

		$('#time').html(h+sep+m+s);
		setTimeout(() => anim.startTime(sep), delay);
	}
}

/**
 * END
 */
