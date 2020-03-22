<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : APIModel.php
	 */

	class APIModel extends bdd {
		public function getKey() {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT *
				FROM `API_keyCrypt`
				WHERE idKey=(SELECT MAX(`idKey`) FROM `API_keyCrypt`)
			');

			$result = $req->fetch(PDO::FETCH_ASSOC);

			return $result;
		}

		public function genKey() {
			$bdd = bdd::connect();
			$aes = services::aesGenKey();
			$req = $bdd->prepare('
				INSERT INTO `API_keyCrypt`
				VALUES (?, ?)
			');

			if($req->execute([$aes['key'], $aes['vector']]))
				return true;

			return false;
		}
	}

	/**
	 * END
	 */
