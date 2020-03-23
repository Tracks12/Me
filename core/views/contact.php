<!-- CONTACT -->
<article class="global-bg">
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
