<!-- EXPERIENCES -->
<article class="global-bg">
	<h2>parcours profesionnel</h2>
	<hr />
	<ul>
		<?php
			$frame = CVModel::getExperiences();

			for($i = 0; $i < count($frame); $i++) {
				$invert = "";

				if($i%2)
					$invert = "inverted";

				echo("<li class=\"$invert\">
						<span id=\"badge\" class=\"fa fa-briefcase\"></span>
						<div class=\"panel\">
							<h3>{$frame[$i][1]}</h3>
							<h4>{$frame[$i][2]}</h4>
							<p class=\"period\"><span class=\"fa fa-calendar\"></span> {$frame[$i][3]}</p>
							<p>{$frame[$i][4]}</p>
						</div>
					</li>");
			}
		?>
	</ul>
</article>
