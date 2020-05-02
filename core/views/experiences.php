<!-- EXPERIENCES -->
<aside id="xp">
	<article class="global-bg">
		<h2>parcours profesionnel</h2>
		<hr />
		<ul>
			<?php
				$obj = CVModel::getExperiences();

				for($i = 0; $i < count($obj); $i++) {
					$invert = ($i%2) ? "inverted" : "";

					echo("<li class=\"$invert\">
							<span id=\"badge\" class=\"fa fa-briefcase\"></span>
							<div class=\"panel\">
								<h3>{$obj[$i][1]}</h3>
								<h4>{$obj[$i][2]}</h4>
								<p class=\"period\"><span class=\"fa fa-calendar\"></span> {$obj[$i][3]}</p>
								<p>{$obj[$i][4]}</p>
							</div>
						</li>");
				}
			?>
		</ul>
	</article>
</aside>
