<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : XHRRoute.php
	 */

	switch(services::isInput($_SERVER['REQUEST_URI'])) {
		/**
		 * Redirect URI
		 */

		case '/?contact':
			$return = CVController::contact($_POST);
			break;

		case '/?ping':
			$return = [ "response" => "pong" ];
			break;

		default:
			http_response_code(404);
			$return = [ "code" => 404, "error" => "NOT FOUND !" ];
			break;
	}

	switch(http_response_code()) {
		case 200:
			echo(json_encode($return));
			break;

		default:
			echo(json_encode($return));
			die();
			break;
	}

	/**
	 * END
	 */
