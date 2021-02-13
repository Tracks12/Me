<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : index.php
	 */

	declare(strict_types = 1);

	require_once('./core/connect.php');
	require_once('./core/libs/services.php');
	require_once('./core/models/CVModel.php');

	if(
		!empty($_SERVER['HTTP_X_REQUESTED_WITH'])
		&& (strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
		&& (strtolower($_SERVER['REQUEST_METHOD']) === 'post')
	) {
		/**
		 * XHR Request Only
		 */

		session_start();

		require_once('./core/controllers/CVController.php');
		require_once('./core/XHRRoute.php');
	}

	else {
		/**
		 * HTTP Request & Other
		 */

		require_once('./core/HTTPRoute.php');
	}

	/**
	 * END
	 */
