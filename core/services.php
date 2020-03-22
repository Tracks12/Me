<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : services.php
	 */

	define('AES_256_CBC', 'aes-256-cbc');

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

		public static function aesGenKey() {
			$return = [
				'key'    => base64_encode(openssl_random_pseudo_bytes(64)),
				'vector' => base64_encode(openssl_random_pseudo_bytes(openssl_cipher_iv_length(AES_256_CBC)))
			];

			return $return;
		}

		public static function aesEncrypt($data, $aes) {
			$aes = [
				'key'			=> base64_decode($aes['key']),
				'vector'	=> base64_decode($aes['vector'])
			];

			$return = openssl_encrypt($data, AES_256_CBC, $aes['key'], 0, $aes['vector']);

			return $return;
		}

		public static function aesDecrypt($data, $aes) {
			$aes = [
				'key'			=> base64_decode($aes['key']),
				'vector'	=> base64_decode($aes['vector'])
			];

			$return = openssl_decrypt($data, AES_256_CBC, $aes['key'], 0, $aes['vector']);

			return $return;
		}
	}

	/**
	 * END
	 */
