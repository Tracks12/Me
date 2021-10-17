<!-- GRADUATIONS -->
<aside id="grad">
	<article class="global-bg">
		<h2>formations</h2>
		<hr />
		<div class="container">
			<?php
				$obj = CVModel::getFormations();

				foreach($obj as $out)
					echo((!is_null($out[5]) ? "<a href=\"{$out[5]}\" target=\"_blank\" rel=\"noreferrer noopener\">" : "" ) . "<div class=\"frame\">
						<font>{$out[1]}</font>
						<span class=\"fa fa-graduation-cap\"></span>
						<h3>{$out[2]}</h3>
						<h4>{$out[3]}</h4>
						<hr />
						<p>{$out[4]}</p>
					</div>" . (!is_null($out[5]) ? "</a>" : ""));
			?>
		</div>
	</article>
</aside>
