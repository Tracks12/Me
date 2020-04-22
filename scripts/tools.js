/**
 * Auteur : CARDINAL Florian
 * Date   : 24/03/2020 21:05
 * Page   : tools.js
 */

class tools {
	/**
	 * capitalize a string
	 * @param s input string
	 * @return capitalize string
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
}

/**
 * END
 */
