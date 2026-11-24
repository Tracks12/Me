import { DOCUMENT, Injectable, inject } from '@angular/core';
import { range } from './utils';

const CONTRAST_COLORS = ['#00AAAA', '#AA00AA', '#AAAA00', '#CC3300', '#22CC00', '#0055CC'];

/**
 * Thème dynamique : sombre la nuit (20h-8h), couleur de contraste aléatoire
 */
@Injectable({ providedIn: 'root' })
export class Theme {
	private readonly root = inject(DOCUMENT).documentElement;

	init(date = new Date()): void {
		const hour = date.getHours();
		this.root.classList.toggle('dark', range(hour, 0, 8) || range(hour, 20, 24));

		const color = CONTRAST_COLORS[Math.floor(Math.random() * CONTRAST_COLORS.length)];
		this.root.style.setProperty('--contrast', color);
	}
}
