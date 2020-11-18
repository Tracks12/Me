<!-- SKILLS -->
<aside id="skills">
	<article class="global-bg">
		<h2>compétences</h2>
		<hr />
		<div class="container">
			<?php
				$obj = CVModel::getSkills();

				foreach($obj as $item) {
					echo("<div class=\"row\">");

					foreach($item as $subitem)
						echo("<div class=\"progressBar\" id=\"{$subitem["id"]}\">
								<div class=\"progress\"></div>
								<h5>{$subitem["title"]}</h5>
							</div>");

					echo("</div>");
				}
			?>
		</div>
	</article>
</aside>
