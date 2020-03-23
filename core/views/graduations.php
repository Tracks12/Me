<!-- GRADUATIONS -->
<article class="global-bg">
	<h2>formations</h2>
	<hr />
	<div class="container">
		<?php
			$frame = CVModel::getFormations();

			foreach($frame as $out) {
				$title = $out[2];

				if($out[5])
					$title = "<a href=\"{$out[5]}\" target=\"_blank\">{$out[2]}</a>";

				echo("<div class=\"frame\">
						<font>{$out[1]}</font>
						<span class=\"fa fa-graduation-cap\"></span>
						<h3>$title</h3>
						<h4>{$out[3]}</h4>
						<hr />
						<p>{$out[4]}</p>
					</div>");
			}
		?>
	</div>
</article>
