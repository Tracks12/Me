/**
 * Auteur : CARDINAL Florian
 * Date   : 29/04/2020 23:27
 * Page   : scrolly.js
 */

"use strict";

$((e) => {
	function u(s, o) {
		let u, a, f;

		if((u = e(s))[t] == 0)
			return n;

		a = u[i]()[r];

		switch(o.anchor) {
			case"middle":
				f = a - (e(window).height() - u.outerHeight()) / 2;
				break;

			case r:
			default:
				f = Math.max(a, 0);
				break;
		}

		return typeof o[i] == "function" ? f -= o[i](): f -= o[i], f;
	}

	let t = "length",
		n = null,
		r = "top",
		i = "offset",
		s = "click.scrolly",
		o = e(window);

	e.fn.scrolly = function(i) {
		let o, a, f, l,
			c = e(this);

		if(this[t] == 0)
			return c;

		if(this[t] > 1) {
			for(o = 0; o < this[t]; o++)
				e(this[o]).scrolly(i);

			return c;
		}

		l = n;
		f = c.attr("href");

		if(f.charAt(0) != "#" || f[t] < 2)
			return c;

		a = jQuery.extend({
			anchor: r,
			easing: "swing",
			offset: 0,
			parent: e("body,html"),
			pollOnce: !1,
			speed: 1e3
		}, i);

		a.pollOnce && (l = u(f, a));

		c.off(s).on(s, (e) => {
			let t = l !== n ? l : u(f, a);

			t !== n && (e.preventDefault(), a.parent.stop().animate({ scrollTop: t }, a.speed, a.easing))
		});
	}
});
