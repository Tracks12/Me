<!DOCTYPE html>
<!--
	Auteur : CARDINAL Florian
	Date   : 22/12/2018 17:15
	Page   : index.php
-->
<?php
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
<html lang="fr">
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
					<pre><?php require_once("./README.txt"); ?></pre>
				</div>
				<?php require_once('./core/views/header.php'); ?>
			</header>
			<aside id="skills">
				<?php require_once('./core/views/skills.php'); ?>
			</aside>
			<aside id="xp">
				<?php require_once('./core/views/experiences.php'); ?>
			</aside>
			<aside id="grad">
				<?php require_once('./core/views/graduations.php'); ?>
			</aside>
			<aside id="portfolio">
				<?php require_once('./core/views/portfolio.php'); ?>
			</aside>
			<aside id="contact">
				<?php require_once('./core/views/contact.html'); ?>
			</aside>
		</section>
		<?php require_once('./core/views/footer.html'); ?>
	</body>
</html>
<!-- END -->
