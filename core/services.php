<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : services.php
	 */

	define('AES_256_CBC', 'aes-256-cbc');

	class services {
		/**
		 * verify if mail is valid
		 * @param string $data string of mail
		 * @return bool [true/false]
		 */
		public static function isMail(string $data): bool {
			$return = filter_var($data, FILTER_VALIDATE_EMAIL);

			return $return;
		}

		/**
		 * verify if number is phone number
		 * @param string $data string of phone number
		 * @return int [1/0]
		 */
		public static function isPhone(string $data): int {
			$return = preg_match("/^(([\+]([\d]{2,}))([0-9\.\-\/\s]{5,})|([0-9\.\-\/\s]{5,}))*$/", $data);

			return $return;
		}

		/**
		 * check input parameter
		 * @param string $data string of input parameter
		 * @return string string of output and verify parameter
		 */
		public static function isInput(string $data): string {
			$data = trim($data);
			$data = stripslashes($data);
			$return = htmlspecialchars($data);

			return $return;
		}

		/**
		 * generate an aes256 key encoded in base64
		 * @return array string of aes256 key & vector in base64
		 */
		public static function aesGenKey(): array {
			$return = [
				'key'    => base64_encode(openssl_random_pseudo_bytes(64)),
				'vector' => base64_encode(openssl_random_pseudo_bytes(openssl_cipher_iv_length(AES_256_CBC)))
			];

			return $return;
		}

		/**
		 * encrypt data with aes256 key & vector
		 * @param string $data data to encrypt
		 * @param array $aes aes256 key & vector
		 * @return string data encrypted in aes256 and encode in base64
		 */
		public static function aesEncrypt(string $data, array $aes): string {
			$aes = [
				'key'			=> base64_decode($aes['key']),
				'vector'	=> base64_decode($aes['vector'])
			];

			$return = openssl_encrypt($data, AES_256_CBC, $aes['key'], 0, $aes['vector']);

			return $return;
		}

		/**
		 * decrypt data with aes256 key & vector
		 * @param string $data string of encrypted data
		 * @param array $aes aes256 key & vector
		 * @return string data decrypted in aes256
		 */
		public static function aesDecrypt(string $data, array $aes): string {
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
