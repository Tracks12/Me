<!-- NAV -->
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
					for($i = 0; $i < count($cat); $i++) {
						if($cat[$i]) { echo("<li><a href=\"#portfolio-{$cat[$i]}\">{$cat[$i]}</a></li>"); }
					}
				?>
			</ul>
		</li>
		<li><a href="#contact">contact</a></li>
	</ul>
</nav>
