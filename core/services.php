<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : services.php
	 */

	class services {
		public static function isMail($data) {
			$return = filter_var($data, FILTER_VALIDATE_EMAIL);

			return $return;
		}

		public static function isPhone($data) {
			$return = preg_match("/^[0-9 ]*$/", $data);

			return $return;
		}

		public static function isInput($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$return = htmlspecialchars($data);

			return $return;
		}
	}

	/**
	 * END
	 */
