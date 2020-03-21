<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : CVmodel.php
	 */

	class model extends bdd {
		public function getNetwork() {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT `name`, `title`, `link`
				FROM `network`
			');

			$return = [];

			while($out = $req->fetch(PDO::FETCH_ASSOC))
				array_push($return, $out);

			return $return;
		}

		public function getSkills() {
			$bdd = bdd::connect();
			$req = [
				$bdd->query('
					SELECT `id`, `title`
					FROM `skills`
					WHERE `idSkills`
					BETWEEN 1 AND 4
				'),
				$bdd->query('
					SELECT `id`, `title`
					FROM `skills`
					WHERE `idSkills`
					BETWEEN 5 AND 8
				')
			];

			$return = [[], []];

			for($i = 0; $i < 2; $i++)
				while($out = $req[$i]->fetch(PDO::FETCH_ASSOC))
					array_push($return[$i], $out);

			return $return;
		}

		public function getSkillsStatus() {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT `id`, `status`
				FROM `skills`
			');

			$return = [];

			while($out = $req->fetch(PDO::FETCH_ASSOC)) {
				$out['status'] = $out['status'] * 100;
				array_push($return, $out);
			}

			return $return;
		}

		public function getExperiences() {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT *
				FROM `experiences`
				ORDER BY `idExperiences` DESC
			');

			$return = [];

			while($out = $req->fetch(PDO::FETCH_NUM))
				array_push($return, $out);

			return $return;
		}

		public function getFormations() {
			$bdd = bdd::connect();
			$req = $bdd->query('
				SELECT *
				FROM `formations`
				ORDER BY `idFormations` DESC
			');

			$return = [];

			while($out = $req->fetch(PDO::FETCH_NUM))
				array_push($return, $out);

			return $return;
		}

		public function insertContactRequest($data) {
			$bdd = bdd::connect();
			$req = $bdd->prepare('
				INSERT INTO `contacts`(`address`, `name`, `fname`, `mail`, `phone`, `msg`)
				VALUES (?, ?, ?, ?, ?, ?)
			');

			$arr = [
				$_SERVER['REMOTE_ADDR'],
				$data['name'],
				$data['fname'],
				$data['mail'],
				$data['tel'],
				$data['msg']
			];

			if($req->execute($arr))
				return true;

			return false;
		}
	}

	/**
	 * END
	 */
