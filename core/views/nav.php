<!-- NAV -->
<nav class="global-bg">
	<p id="time">00:00:00</p>
	<div>
		<span class="fa fa-bars"></span>
	</div>
	<ul>
		<li><a class="scrolly" href="#me">moi</a></li>
		<li><a class="scrolly" href="#skills">compétences</a></li>
		<li><a class="scrolly" href="#xp">parcours pro</a></li>
		<li><a class="scrolly" href="#grad">formations</a></li>
		<li>
			<a class="scrolly" href="#portfolio">portfolio <span class="fa fa-sort-desc"></span></a>
			<ul class="global-bg">
				<?php
					foreach($cat as $out)
						if($out)
							echo("<li><a class='scrolly' href=\"#portfolio-$out\">$out</a></li>");
				?>
			</ul>
		</li>
		<li><a class="scrolly" href="#contact">contact</a></li>
	</ul>
</nav>
