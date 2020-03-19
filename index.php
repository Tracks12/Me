<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : route.php
	 */

	require_once('./core/connect.php');
	require_once('./core/services.php');
	require_once('./core/models/CVModel.php');

	if(
		!empty($_SERVER['HTTP_X_REQUESTED_WITH'])
		&& (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest')
		&& ($_SERVER['REQUEST_METHOD'] === 'POST')
	) {
		/**
		 * XHR Request Only
		 */

		require_once('./core/controllers/CVController.php');
		require_once('./core/route.php');
	}

	else {
		/**
		 * HTTP Request & Other
		 */

		$response = http_response_code();

		switch($response) {
			case 200:
			case 403:
			case 404: require_once('./core/views/index.php'); break;
			default: die(); break;
		}
	}

	/**
	 * END
	 */
