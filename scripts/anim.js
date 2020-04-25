/**
 * Auteur : CARDINAL Florian
 * Date   : 22/04/2020 01:48
 * Page   : anim.js
 */

class anim {
	constructor() {
		let output = new Array($('#animate p')[0], $('#animate pre')[0]),
				data = new Array(output[0].innerText, output[1].innerText);

		for(let i = 0; i < output.length; i++)
			output[i].innerText = '';

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

/**
 * END
 */
