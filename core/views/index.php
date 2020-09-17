<!DOCTYPE html>
<!--
	Auteur : CARDINAL Florian
	Date   : 22/12/2018 17:15
	Page   : index.php
-->
<?php
	$dir = scandir("./portfolio/"); $k = 0;
	$categ = array(
		array("btn", "loader", "login", "nav", "slide"),
		array("bouton", "chargement", "connexion", "navigation", "panneau")
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
	<body>
		<?php require_once('./core/views/nav.php'); ?>
		<a class="scrolly" id="upper" href="#me">
			<span class="fa fa-chevron-up"></span>
		</a>
		<section>
			<header id="me">
				<div id="animate">
					<p>user@machine:~$ cat README.txt</p>
					<pre><?php require_once("./assets/files/readme.txt"); ?></pre>
				</div>
				<?php require_once('./core/views/header.php'); ?>
			</header>
			<?php
				$frames = [ // Composants du site web
					'./core/views/skills.php',
					'./core/views/experiences.php',
					'./core/views/graduations.php',
					'./core/views/portfolio.php',
					'./core/views/contact.html'
				];

				foreach($frames as $frame)
					require_once($frame);
			?>
		</section>
		<?php require_once('./core/views/footer.html'); ?>
	</body>
</html>
<!-- END -->
