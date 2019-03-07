<!DOCTYPE html>
<!--
	Auteur : CARDINAL Florian
	Date   : 22/12/2018 17:15
	Page   : index.php
-->
<?php
	$dir = scandir("./portfolio/");
	$j = 0;
	for($i = 0; $i < count($dir); $i++) {
		if(!($dir[$i+3] === "login.php")) {
			$output[1] = explode("-", $dir[$i+3]);
			$categ = array(
				array("btn", "login", "nav"),
				array("bouton", "connexion", "navigation")
			);
			
			for($k = 0; $k <= 2; $k++) {
				if($output[1][0] === $categ[0][$k]) {
					$cat[$k] = $categ[1][$k];
					$output[0][$k][$i-$j] = $dir[$i+3];
				}
			}
		} else { $j++; }
	}
?>
<html>
	<head>
		<meta charset="UTF-8" >
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Hello :)</title>
		<link rel="icon" type="image/gif" href="./pics/favicon.gif" />
		<link rel="stylesheet" type="text/css" href="./font-awesome.min.css" />
		<link rel="stylesheet" type="text/css" href="./style.css" />
		<script language="javascript" type="text/javascript" src="./jquery-3.3.1.min.js"></script>
		<script language="JavaScript" type="text/javascript" src="./particles.min.js"></script>
		<script language="javascript" type="text/javascript" src="./script.js"></script>
	</head>
	<div id="particles-js"></div>
	<body onload="anim.startTime();">
		<?php require("./nav.php"); ?>
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
					<span title="Ma tête"></span>
					<h1>cardinal florian</h1>
					<h3>développeur web junior</h3>
					<a href="./cv.pdf" download>Télécharger CV</a>
					<hr />
					<?php
						$button = array(
							array("link" => 'https://github.com/Tracks12', "title" => 'Jettez un oeil à tous mes projets sur GitHub', "name" => "GitHub"),
							array("link" => 'https://www.linkedin.com/in/florian-cardinal-13317b150', "title" => 'Jettez un oeil à mon profil LinkedIn', "name" => "LinkedIn")
						);
						
						for($i = 0; $i < count($button); $i++) { echo("<button onclick=\"window.open('{$button[$i]["link"]}');\" title=\"{$button[$i]["title"]}\">{$button[$i]["name"]}</button>"); }
					?>
				</article>
			</header>
			<aside id="skills">
				<article>
					<h2>compétences</h2>
					<hr />
					<div class="container">
						<?php
							$frame = array(
								array(
									array("id" => "html", "title" => "HTML5"),
									array("id" => "bootstrap", "title" => "BootStrap"),
									array("id" => "js", "title" => "JavaScript"),
									array("id" => "mysql", "title" => "MySQL")
								),
								array(
									array("id" => "css", "title" => "CSS3"),
									array("id" => "jquery", "title" => "JQuery"),
									array("id" => "php", "title" => "PHP7"),
									array("id" => "python", "title" => "Python")
								)
							);
							
							for($i = 0; $i < count($frame); $i++) {
							echo("<div class=\"row\">");
								for($j = 0; $j < count($frame[$i]); $j++) {
									echo("<div class=\"progressBar\" id=\"{$frame[$i][$j]["id"]}\">
										<div class=\"progress\"></div>
										<h5>{$frame[$i][$j]["title"]} </h5>
									</div>");
								} echo("</div>");
							}
						?>
						<script language="javascript" type="text/javascript">
							var progress = new Array(
								Array("html", "100%"),
								Array("bootstrap", "95%"),
								Array("js", "95%"),
								Array("mysql", "90%"),
								Array("css", "100%"),
								Array("jquery", "95%"),
								Array("php", "95%"),
								Array("python", "85%"));
							
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
							$frame = array(
								array(
									"Indépendant",
									"Développeur Web",
									"juil. 2017", "sept. 2018",
									"France"
								)
							);
							
							for($i = 0; $i < count($frame); $i++) {
								$invert = "";
								if($i%2) { $invert = "inverted"; }
								echo("<li class=\"$invert\">
									<span id=\"badge\" class=\"fa fa-briefcase\"></span>
									<div class=\"panel\">
										<h3>{$frame[$i][0]}</h3>
										<h4>{$frame[$i][1]}</h4>
										<p class=\"period\"><span class=\"fa fa-calendar\"></span> {$frame[$i][2]} - {$frame[$i][3]}</p>
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
							$frame = array(
								array(
									"2017",
									"Lycée GT Déodat de Séverac",
									"Baccalauréat STI2D<br /><br />",
									"Système Informatique et Numérique<br />Mention Assez Bien",
									false
								),
								array(
									"2017",
									"Udemy.com",
									"Formation online<br />Web Designer",
									"Illustrator, PhotoShop, XDesign<br />Web Design",
									"https://www.udemy.com/certificate/UC-GMXYYE9B/"
								),
								array(
									"2017",
									"Udemy.com",
									"Formation online<br />Web Developer",
									"HTML5/CSS3, JavaScript, JQuery, Php7, MySQL<br />Responsive Design",
									"https://www.udemy.com/certificate/UC-8XQUXMMT/"
								),
								array(
									"2016",
									"Codecademy.com",
									"Formation online<br />Programer & Developer",
									"HTML5/CSS3, JavaScript, JQuery, Python, Ruby<br />Responsive Design, Deploy a Website",
									"https://www.codecademy.com/fr/4N4RCHY"
								)
							);
							
							for($i = 0; $i < count($frame); $i++) {
								$title = $frame[$i][1];
								if($frame[$i][4]) { $title = "<a href=\"{$frame[$i][4]}\" target=\"_blank\">{$frame[$i][1]}</a>"; }
								echo("<div class=\"frame\">
									<font>{$frame[$i][0]}</font>
									<span class=\"fa fa-graduation-cap\"></span>
									<h3>$title</h3>
									<h4>{$frame[$i][2]}</h4>
									<hr />
									<p>{$frame[$i][3]}</p>
								</div>");
							}
						?>
					</div>
				</article>
			</aside>
			<aside id="portfolio">
				<article>
					<h2>portfolio</h2>
					<hr />
					<?php
						$j = 0;
						for($i = 0; $i < count($output[0]); $i++) {
							echo("<div id=\"portfolio-{$cat[$i]}\">
								<h3>{$cat[$i]}</h3>
								<ul>");
							
							while($output[0][$i][$j]) {
								if($output[0][$i][$j] !== NULL) {
									echo("<li>
											<a target=\"blank_\" href=\"./portfolio/{$output[0][$i][$j]}\" title=\"{$cat[$i]} : {$output[0][$i][$j]}\">
												<img type=\"image/png\" src=\"./pics/p{$j}.png\" />
												<p>{$output[0][$i][$j]}</p>
											</a>
										</li>");
								} $j++;
							} echo("</ul></div>");
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
									for($j = 0; $j < count($frame[$i]); $j++) {
										echo("<div class=\"inputBox\" id=\"{$frame[$i][$j]['name']}\">
											<input type=\"{$frame[$i][$j]['type']}\" name=\"{$frame[$i][$j]['name']}\" required />
											<label>{$frame[$i][$j]['label']}</label>
											<p class=\"error\"></p>
										</div>");
									} echo("</div>");
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
		<?php require("./footer.html"); ?>
	</body>
	<script language="JavaScript" type="text/javascript" src="./app.js"></script>
</html>
<!-- END -->
