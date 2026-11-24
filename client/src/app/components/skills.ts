import { Component, computed, effect, input, signal } from '@angular/core';
import { Skill } from '../models';

/**
 * Compétences sous forme de barres de progression animées
 */
@Component({
	selector: 'app-skills',
	template: `
		<aside id="skills">
			<article class="global-bg">
				<h2>compétences</h2>
				<hr />
				<div class="container">
					@for (row of rows(); track $index) {
						<div class="row">
							@for (skill of row; track skill.id) {
								<div class="progressBar" [id]="skill.id">
									<div class="progress" [style.width.%]="animated() ? skill.status : 0"></div>
									<h3>{{ skill.title }}@if (animated()) { {{ skill.status }}%}</h3>
								</div>
							}
						</div>
					}
				</div>
			</article>
		</aside>
	`,
})
export class Skills {
	readonly skills = input<Skill[]>([]);

	/** deux colonnes de compétences */
	protected readonly rows = computed(() => {
		const skills = this.skills();
		const half = Math.ceil(skills.length / 2);
		return [skills.slice(0, half), skills.slice(half)];
	});

	/** déclenche la transition CSS de largeur une fois les barres rendues */
	protected readonly animated = signal(false);

	constructor() {
		effect(() => {
			if (this.skills().length) setTimeout(() => this.animated.set(true), 50);
		});
	}
}
