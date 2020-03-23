<!-- HEADER -->
<article class="global-bg">
	<span class="slither horizontal"></span>
	<span class="slither vertical"></span>
	<span class="slither horizontal"></span>
	<span class="slither vertical"></span>
	<span class="avatar" title="Ma tête"></span>
	<h1>cardinal florian</h1>
	<h3>développeur web junior</h3>
	<a href="/assets/cv.pdf" download>télécharger cv</a>
	<hr />
	<?php
		$button = CVModel::getNetwork();

		foreach($button as $out) {
			echo("<button onclick=\"window.open('{$out["link"]}');\" title=\"{$out["title"]}\">");
			require_once("./assets/img/{$out['name']}.svg");
			echo("</button>");
		}
	?>
</article>
