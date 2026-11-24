import { Component, input } from '@angular/core';
import { Formation } from '../models';

/**
 * Formations & diplômes
 */
@Component({
	selector: 'app-formations',
	template: `
		<aside id="grad">
			<article class="global-bg">
				<h2>formations</h2>
				<hr />
				<div class="container">
					@for (formation of formations(); track $index) {
						<div class="frame">
							<font>{{ formation.date }}</font>
							<span class="fa fa-graduation-cap"></span>
							<h3>
								@if (formation.link) {
									<a [href]="formation.link" target="_blank" rel="noreferrer noopener">{{ formation.entity }}</a>
								} @else {
									{{ formation.entity }}
								}
							</h3>
							<h4 [innerHTML]="formation.title"></h4>
							<hr />
							<p [innerHTML]="formation.description"></p>
						</div>
					}
				</div>
			</article>
		</aside>
	`,
})
export class Formations {
	readonly formations = input<Formation[]>([]);
}
