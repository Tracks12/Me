/**
 * Auteur : CARDINAL Florian
 * Date   : 22/12/2018 17:19
 * Composant racine du CV
 */
import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { Contact } from './components/contact';
import { Experiences } from './components/experiences';
import { Footer } from './components/footer';
import { Formations } from './components/formations';
import { Nav } from './components/nav';
import { Portfolio } from './components/portfolio';
import { Profile } from './components/profile';
import { Skills } from './components/skills';
import { Terminal } from './components/terminal';
import { credit } from './credit';
import { CV, README } from './data';
import { startParticles } from './particles';
import { Theme } from './theme';
import { isMobile, range } from './utils';

@Component({
	selector: 'app-root',
	imports: [Nav, Terminal, Profile, Skills, Experiences, Formations, Portfolio, Contact, Footer],
	template: `
		<div id="particles-js"></div>
		<app-nav [portfolio]="cv.portfolio" [(open)]="menuOpen" />
		<a id="upper" href="#me" [class.visible]="showUpper()">
			<span class="fa fa-chevron-up"></span>
		</a>
		<section (click)="closeMenu()">
			<header id="me">
				<app-terminal [content]="readme" />
				<app-profile [network]="cv.network" />
			</header>
			<app-skills [skills]="cv.skills" />
			<app-experiences [experiences]="cv.experiences" />
			<app-formations [formations]="cv.formations" />
			<app-portfolio [categories]="cv.portfolio" />
			<app-contact />
		</section>
		<app-footer />
	`,
	host: { '(window:scroll)': 'onScroll()' },
})
export class App implements OnInit, AfterViewInit {
	private readonly theme = inject(Theme);

	protected readonly cv = CV;
	protected readonly readme = README;
	protected readonly menuOpen = signal(false);
	protected readonly showUpper = signal(false);

	ngOnInit(): void {
		this.theme.init();
		credit();
	}

	ngAfterViewInit(): void {
		startParticles('particles-js');
		this.onScroll();
	}

	protected closeMenu(): void {
		if (isMobile()) this.menuOpen.set(false);
	}

	/** affiche le bouton "remonter" entre 5% et 90% de la page */
	protected onScroll(): void {
		const html = document.documentElement;
		this.showUpper.set(range(html.scrollTop / html.scrollHeight, 0.05, 0.9));
	}
}
