<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : APIModel.php
	 */

	class APIModel extends bdd {
		public function getKey(): array {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT *
				FROM `API_keyCrypt`
				WHERE idKey=(SELECT MAX(`idKey`) FROM `API_keyCrypt`)
			');

			return $req->fetch(PDO::FETCH_ASSOC);
		}

		public function genKey(): bool {
			$bdd = bdd::connect();
			$aes = services::aesGenKey();
			$req = $bdd->prepare('
				INSERT INTO `API_keyCrypt`
				VALUES (?, ?)
			');

			return ($req->execute([$aes['key'], $aes['vector']])) ? true : false;
		}
	}

	/**
	 * END
	 */
