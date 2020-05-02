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
			$return = json_encode([ "response" => "pong"]);
			break;

		default:
			http_response_code(404);
			$return = json_encode([ "code" => 404, "error" => "NOT FOUND !" ]);
			break;
	}

	switch(http_response_code()) {
		case 200:
			echo($return);
			break;

		default:
			echo($return);
			die();
			break;
	}

	/**
	 * END
	 */
