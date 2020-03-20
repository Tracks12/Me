<!DOCTYPE html>
<!--
	Auteur : CARDINAL Florian
	Date   : 22/12/2018 17:15
	Page   : index.php
-->
<?php
	$bdd = bdd::connect();
	$dir = scandir("./portfolio/"); $k = 0;
	$categ = array(
		array("btn", "login", "nav", "slide"),
		array("bouton", "connexion", "navigation", "panneau")
	);

	for($i = 2; $i < count($dir); $i++) {
		$l = $i-2;
		if(!($dir[$i] === "login.php")) {
			$output[1] = explode("-", $dir[$i]);

			for($j = 0; $j < count($categ[0]); $j++) {
				if($output[1][0] === $categ[0][$j]) {
					$cat[$j] = $categ[1][$j];
					$output[0][$j][($i-2)-$k] = $dir[$i];
				}
			}
		}

		else
			$k = 1;
	}
?>
<html>
	<?php require_once('./core/views/head.html'); ?>
	<div id="particles-js"></div>
	<body onload="anim.startTime();">
		<?php require_once('./core/views/nav.php'); ?>
		<a id="upper" href="#me">
			<span class="fa fa-chevron-up"></span>
		</a>
		<section>
			<header id="me">
				<div id="animate">
					<p>user@machine:~$ cat README.txt</p>
					<pre><?php require("./README.txt"); ?></pre>
				</div>
				<article>
					<span class="slither horizontal"></span>
					<span class="slither vertical"></span>
					<span class="slither horizontal"></span>
					<span class="slither vertical"></span>
					<span class="avatar" title="Ma tête"></span>
					<h1>cardinal florian</h1>
					<h3>développeur web junior</h3>
					<a href="https://github.com/Tracks12/Me/raw/master/cv.pdf" download>Télécharger CV</a>
					<hr />
					<?php
						$button = model::getNetwork($bdd);

						foreach($button as $out) {
							echo("<button onclick=\"window.open('{$out["link"]}');\" title=\"{$out["title"]}\">");
							require_once("./pics/{$out['name']}.svg");
							echo("</button>");
						}
					?>
				</article>
			</header>
			<aside id="skills">
				<article>
					<h2>compétences</h2>
					<hr />
					<div class="container">
						<?php
							$frame = model::getSkills($bdd);

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
									$status = model::getSkillsStatus($bdd);

									foreach($status as $out) {
										$out['status'] = $out['status'] * 100;
										echo("Array('{$out['id']}', '{$out['status']}%'),");
									}
								?>
							);

							skillsBar(progress);
						</script>
					</div>
				</article>
			</aside>
			<aside id="xp">
				<article>
					<h2>parcours profesionnel</h2>
					<hr />
					<ul>
						<?php
							$frame = model::getExperiences($bdd);

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
			</aside>
			<aside id="grad">
				<article>
					<h2>formations</h2>
					<hr />
					<div class="container">
						<?php
							$frame = model::getFormations($bdd);

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

							$bdd = bdd::disconnect();
						?>
					</div>
				</article>
			</aside>
			<aside id="portfolio">
				<article>
					<h2>portfolio</h2>
					<hr />
					<?php
						$k = 0;

						for($i = 0; $i < count($output[0]); $i++) {
							echo("<div id=\"portfolio-{$cat[$i]}\">
								<h3>{$cat[$i]}</h3>
								<ul>");

							for($j = 0; $j < $l; $j++) {
								if(isset($output[0][$i][$j]))
									echo("<li>
											<a target=\"blank_\" href=\"./portfolio/{$output[0][$i][$j]}\" title=\"{$cat[$i]} : {$output[0][$i][$j]}\">
												<span style=\"background-image: url('/pics/p{$j}.png');\"></span>
												<p>{$output[0][$i][$j]}</p>
											</a>
										</li>");

								$k++;
							}

							echo("</ul></div>");
						}
					?>
				</article>
			</aside>
			<aside id="contact">
				<article>
					<h2>contact</h2>
					<hr />
					<div class="container">
						<form method="POST" action>
							<?php
								$frame = array(
									array(
										array("type" => "text", "name" => "fName", "label" => "Prénom"),
										array("type" => "text", "name" => "name", "label" => "Nom")
									),
									array(
										array("type" => "email", "name" => "mail", "label" => "Email"),
										array("type" => "tel", "name" => "phone", "label" => "Téléphone")
									)
								);

								foreach($frame as $item) {
									echo("<div class=\"row\">");

									foreach($item as $subitem)
										echo("<div class=\"inputBox\" id=\"{$subitem['name']}\">
												<input type=\"{$subitem['type']}\" name=\"{$subitem['name']}\" required />
												<label>{$subitem['label']}</label>
												<p class=\"error\"></p>
											</div>");

									echo("</div>");
								}
							?>
							<div class="inputBox" id="msg">
								<textarea name="msg" required></textarea>
								<label>Message</label>
								<p class="error"></p>
							</div>
							<input type="submit" value="envoyer" />
							<p class="ty">Votre message a bien été envoyé. Merci de m'avoir contacter :)</p>
						</form>
					</div>
				</article>
			</aside>
		</section>
		<?php require_once('./core/views/footer.html'); ?>
	</body>
</html>
<!-- END -->