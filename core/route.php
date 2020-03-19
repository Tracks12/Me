<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : route.php
	 */

	switch(services::isInput($_GET['act'])) {
		case 'contact':
			$result = controller::contact($_POST);
			echo($result);
			break;

		default:
			http_response_code(404);
			die(); break;
	}

	/**
	 * END
	 */
