<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : XHRRoute.php
	 */

	foreach(XHRROUTES as $route => $action) {
		switch(Services::isInput($_SERVER['REQUEST_URI'])) {
			/**
			 * Redirect URI
			 */

			case "/?{$route}":
 				$return = [
 					"code"     => 200,
 					"response" => isset($_POST) ? CVController::$action($_POST) : DMCactiControllers::$action()
 				]; break 2;

			default:
				http_response_code(404);
				$return = [ "code" => 404, "error" => "NOT FOUND !" ];
				break;
		}
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
