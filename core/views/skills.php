<!-- SKILLS -->
<article class="global-bg">
	<h2>compétences</h2>
	<hr />
	<div class="container">
		<?php
			$frame = CVModel::getSkills();

			foreach($frame as $item) {
				echo("<div class=\"row\">");

				foreach($item as $subitem)
					echo("<div class=\"progressBar\" id=\"{$subitem["id"]}\">
							<div class=\"progress\"></div>
							<h5>{$subitem["title"]}</h5>
						</div>");

				echo("</div>");
			}
		?>
		<script language="javascript" type="text/javascript">
			var progress = new Array(
				<?php
					$status = CVModel::getSkillsStatus();

					foreach($status as $out)
						echo("Array('{$out['id']}', '{$out['status']}%'),");
				?>
			);

			skillsBar(progress);
		</script>
	</div>
</article>
