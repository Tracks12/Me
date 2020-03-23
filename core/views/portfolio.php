<!-- PORTFOLIO -->
<article class="global-bg">
	<h2>portfolio</h2>
	<hr />
	<?php
		for($i = 0; $i < count($output[0]); $i++) {
			echo("<div id=\"portfolio-{$cat[$i]}\">
				<h3>{$cat[$i]}</h3>
				<ul>");

			for($j = 0; $j < $l; $j++) {
				if(isset($output[0][$i][$j]))
					echo("<li>
							<a target=\"blank_\" href=\"./portfolio/{$output[0][$i][$j]}\" title=\"{$cat[$i]} : {$output[0][$i][$j]}\">
								<span style=\"background-image: url('/assets/img/portfolio/p{$j}.png');\"></span>
								<p>{$output[0][$i][$j]}</p>
							</a>
						</li>");
			}

			echo("</ul></div>");
		}
	?>
</article>
