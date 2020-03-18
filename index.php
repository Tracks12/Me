<!DOCTYPE html>
<!--
	Auteur : CARDINAL Florian
	Date   : 22/12/2018 17:15
	Page   : index.php
-->
<?php
	require_once('./bddConnect.php');

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
	<head>
		<meta charset="UTF-8" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="Web CV by CARDINAL Florian - Junior Web Developer [Full Stack] {Html5/Css3, Js, PhP7, MySQL, Python}">
		<title>Hello :)</title>
		<link rel="icon" type="image/gif" href="./pics/favicon.gif" />
		<link rel="stylesheet" type="text/css" href="./styles/font-awesome/font-awesome.min.css" />
		<link rel="stylesheet" type="text/css" href="./styles/main.css" />
		<link rel="stylesheet" type="text/css" href="./styles/animation.css" />
		<link rel="stylesheet" type="text/css" href="./styles/responsive.css" />
		<script language="javascript" type="text/javascript" src="./scripts/jquery-3.3.1.min.js"></script>
		<script language="JavaScript" type="text/javascript" src="./scripts/particles.min.js"></script>
		<script language="javascript" type="text/javascript" src="./scripts/main.js"></script>
	</head>
	<div id="particles-js"></div>
	<body onload="anim.startTime();">
		<nav>
			<p id="time">00:00:00</p>
			<div>
				<span class="fa fa-bars"></span>
			</div>
			<ul>
				<li><a href="./#me">moi</a></li>
				<li><a href="./#skills">compétences</a></li>
				<li><a href="./#xp">parcours pro</a></li>
				<li><a href="./#grad">formations</a></li>
				<li>
					<a href="#portfolio">portfolio <span class="fa fa-sort-desc"></span></a>
					<ul>
						<?php
							for($i = 0; $i < count($cat); $i++)
								if($cat[$i])
									echo("<li><a href=\"#portfolio-{$cat[$i]}\">{$cat[$i]}</a></li>");
						?>
					</ul>
				</li>
				<li><a href="#contact">contact</a></li>
			</ul>
		</nav>
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
						$req = $bdd->query('SELECT * FROM network');
						$button = array();

						while($out = $req->fetch(PDO::FETCH_ASSOC))
							array_push($button, $out);

						for($i = 0; $i < count($button); $i++) {
							echo("<button onclick=\"window.open('{$button[$i]["link"]}');\" title=\"{$button[$i]["title"]}\">");
							include("./pics/{$button[$i]['name']}.svg");
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
							$req = array(
								$bdd->query('SELECT * FROM skills WHERE idSkills BETWEEN 1 AND 4'),
								$bdd->query('SELECT * FROM skills WHERE idSkills BETWEEN 5 AND 8'),
								$bdd->query('SELECT * FROM skills')
							);
							$frame = array(array(), array());

							for($i = 1; $i <= 4; $i++)
								array_push($frame[0], $req[0]->fetch(PDO::FETCH_ASSOC));

							for($i = 5; $i <= 8; $i++)
								array_push($frame[1], $req[1]->fetch(PDO::FETCH_ASSOC));

							for($i = 0; $i < count($frame); $i++) {
								echo("<div class=\"row\">");

								for($j = 0; $j < count($frame[$i]); $j++)
									echo("<div class=\"progressBar\" id=\"{$frame[$i][$j]["id"]}\">
											<div class=\"progress\"></div>
											<h5>{$frame[$i][$j]["title"]}</h5>
										</div>");

								echo("</div>");
							}
						?>
						<script language="javascript" type="text/javascript">
							var progress = new Array(
								<?php
									while($out = $req[2]->fetch(PDO::FETCH_ASSOC)) {
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
							$req = $bdd->query('SELECT * FROM experiences ORDER BY idExperiences DESC');
							$frame = array();

							while($out = $req->fetch(PDO::FETCH_NUM))
								array_push($frame, $out);

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
							$req = $bdd->query('SELECT * FROM formations ORDER BY idFormations DESC');
							$frame = array();

							while($out = $req->fetch(PDO::FETCH_NUM))
								array_push($frame, $out);

							for($i = 0; $i < count($frame); $i++) {
								$title = $frame[$i][2];

								if($frame[$i][5])
									$title = "<a href=\"{$frame[$i][5]}\" target=\"_blank\">{$frame[$i][2]}</a>";

								echo("<div class=\"frame\">
										<font>{$frame[$i][1]}</font>
										<span class=\"fa fa-graduation-cap\"></span>
										<h3>$title</h3>
										<h4>{$frame[$i][3]}</h4>
										<hr />
										<p>{$frame[$i][4]}</p>
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
								if(isset($output[0][$i][$j])) //<img type=\"image/png\" src=\"./pics/p{$j}.png\" />
									echo("<li>
											<a target=\"blank_\" href=\"./portfolio/{$output[0][$i][$j]}\" title=\"{$cat[$i]} : {$output[0][$i][$j]}\">
												<span style=\"background-image: url('./pics/p{$j}.png');\"></span>
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

								for($i = 0; $i < count($frame); $i++) {
									echo("<div class=\"row\">");

									for($j = 0; $j < count($frame[$i]); $j++)
										echo("<div class=\"inputBox\" id=\"{$frame[$i][$j]['name']}\">
												<input type=\"{$frame[$i][$j]['type']}\" name=\"{$frame[$i][$j]['name']}\" required />
												<label>{$frame[$i][$j]['label']}</label>
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
		<footer>
			<a href="#me">
				<span class="fa fa-chevron-up"></span>
			</a>
			<p>Fait par Cardinal Florian</p>
		</footer>
	</body>
</html>
<!-- END -->
