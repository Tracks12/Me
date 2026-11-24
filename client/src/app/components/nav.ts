import { Component, DestroyRef, inject, input, model, OnInit, signal } from '@angular/core';
import { PortfolioCategory } from '../models';
import { isMobile, pad } from '../utils';

/**
 * Barre de navigation + horloge
 */
@Component({
	selector: 'app-nav',
	template: `
		<nav class="global-bg" [class.open]="open()">
			<p id="time">{{ time() }}</p>
			<div (click)="toggle()">
				<span class="fa fa-bars"></span>
			</div>
			<ul>
				<li><a href="#me" (click)="close()">moi</a></li>
				<li><a href="#skills" (click)="close()">compétences</a></li>
				<li><a href="#xp" (click)="close()">parcours pro</a></li>
				<li><a href="#grad" (click)="close()">formations</a></li>
				<li [class.open]="subOpen()" (click)="toggleSub()">
					<a href="#portfolio">portfolio <span class="fa fa-sort-desc"></span></a>
					<ul class="global-bg">
						@for (category of portfolio(); track category.key) {
							<li><a [href]="'#portfolio-' + category.key" (click)="close()">{{ category.key }}</a></li>
						}
					</ul>
				</li>
				<li><a href="#contact" (click)="close()">contact</a></li>
			</ul>
		</nav>
	`,
	host: { '(window:resize)': 'onResize()' },
})
export class Nav implements OnInit {
	readonly portfolio = input<PortfolioCategory[]>([]);
	/** menu mobile ouvert */
	readonly open = model(false);

	protected readonly subOpen = signal(false);
	protected readonly time = signal('00:00:00');

	private timer?: ReturnType<typeof setTimeout>;
	private separator = ':';

	constructor() {
		inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
	}

	ngOnInit(): void {
		this.tick();
	}

	protected toggle(): void {
		this.open.update((open) => !open);
		this.subOpen.set(false);
	}

	protected toggleSub(): void {
		if (isMobile()) this.subOpen.update((open) => !open);
	}

	protected close(): void {
		if (isMobile()) this.open.set(false);
	}

	protected onResize(): void {
		if (!isMobile()) {
			this.open.set(false);
			this.subOpen.set(false);
		}
	}

	/** horloge : HH:MM:SS sur desktop, HH:MM avec séparateur clignotant sur mobile */
	private tick(): void {
		const now = new Date();
		const [h, m] = [pad(now.getHours()), pad(now.getMinutes())];
		let delay = 500;

		if (!isMobile()) {
			this.separator = ':';
			this.time.set(`${h}:${m}:${pad(now.getSeconds())}`);
		} else {
			delay = 1000;
			this.separator = this.separator === ':' ? ' ' : ':';
			this.time.set(`${h}${this.separator}${m}`);
		}

		this.timer = setTimeout(() => this.tick(), delay);
	}
}
