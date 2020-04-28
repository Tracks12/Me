<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : XHRRoute.php
	 */

	switch(services::isInput($_SERVER['REQUEST_URI'])) {
		case '/?contact':
			echo(CVController::contact($_POST));
			break;

		default:
			http_response_code(404);
			die();
			break;
	}

	/**
	 * END
	 */
