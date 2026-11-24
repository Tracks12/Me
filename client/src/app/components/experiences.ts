import { Component, input } from '@angular/core';
import { Experience } from '../models';

/**
 * Parcours professionnel (timeline)
 */
@Component({
	selector: 'app-experiences',
	template: `
		<aside id="xp">
			<article class="global-bg">
				<h2>parcours profesionnel</h2>
				<hr />
				<ul>
					@for (xp of experiences(); track $index; let odd = $odd) {
						<li [class.inverted]="odd">
							<span id="badge" class="fa fa-briefcase"></span>
							<div class="panel">
								<h3>{{ xp.entity }}</h3>
								<h4>{{ xp.job }}</h4>
								<p class="period"><span class="fa fa-calendar"></span> {{ xp.period }}</p>
								<p [innerHTML]="xp.description"></p>
							</div>
						</li>
					}
				</ul>
			</article>
		</aside>
	`,
})
export class Experiences {
	readonly experiences = input<Experience[]>([]);
}
