/**
 * Auteur : CARDINAL Florian
 * Date   : 24/03/2020 21:05
 * Page   : tools.js
 */

class tools {
	/**
	 * capitalize a string
	 * @param {string} s input string
	 * @return {string} capitalize string
	 */
	static capitalize(s) {
		if(typeof s !== 'string')
			return '';

		return s.charAt(0).toUpperCase() + s.slice(1);
	}

	/**
	 * check value in range
	 * @param x value
	 * @param min minimal value
	 * @param max maximal value
	 * @return [true/false]
	 */
	static range(x, min, max) {
		return ((x - min) * (x - max) <= 0);
	}

	/**
	 * make a underline in a console string
	 * @param {string} data console string
	 * @return {string} underline of console string
	 */
	static underliner(data) {
		let s = "";

		for(let i = 0; i < data.length; i++)
			s += (data[i] === " " || data[i] === "\n") ? data[i] : '-';

		return `${s}\n`;
	}
}

/**
 * END
 */