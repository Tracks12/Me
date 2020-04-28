<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 22/03/2020 16:01
	 * Page   : HTTPRoute.php
	 */

	$network = CVModel::getNetwork();

	switch(services::isInput($_SERVER['REQUEST_URI'])) {
		case '/github':
			header("location: {$network[0]['link']}");
			break;

		case '/linkedin':
			header("location: {$network[1]['link']}");
			break;

		case '/LegaChat':
			header("location: http://betawallahso.altervista.org/LegaChat/");
			break;

		default:
			continue;
			break;
	}

	switch(http_response_code()) {
		case 200:
			require_once('./core/views/index.php');
			break;

		case 403:
		case 404:
			require_once('./core/views/index.php');
			break;

		default:
			die();
			break;
	}

	/**
	 * END
	 */
