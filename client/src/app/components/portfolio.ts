import { Component, input } from '@angular/core';
import { PortfolioCategory } from '../models';

/**
 * Portfolio : maquettes UI groupées par catégorie
 */
@Component({
	selector: 'app-portfolio',
	template: `
		<aside id="portfolio">
			<article class="global-bg">
				<h2>portfolio</h2>
				<hr />
				@for (category of categories(); track category.key) {
					<div [id]="'portfolio-' + category.key">
						<h3>{{ category.key }}</h3>
						<ul>
							@for (item of category.items; track item.name) {
								<li>
									<a target="_blank" rel="noopener" [href]="item.url" [title]="category.key + ' : ' + item.name">
										<span [style.background-image]="'url(' + item.image + ')'"></span>
										<p>{{ item.title }}</p>
									</a>
								</li>
							}
						</ul>
					</div>
				}
			</article>
		</aside>
	`,
})
export class Portfolio {
	readonly categories = input<PortfolioCategory[]>([]);
}
