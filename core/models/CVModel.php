<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : CVmodel.php
	 */

	class model {
		public function getNetwork($bdd) {
			$req = $bdd->query('SELECT name, title, link FROM network');
			$return = [];

			while($out = $req->fetch(PDO::FETCH_ASSOC))
				array_push($return, $out);

			return $return;
		}

		public function getSkills($bdd) {
			$req = [
				$bdd->query('SELECT id, title FROM skills WHERE idSkills BETWEEN 1 AND 4'),
				$bdd->query('SELECT id, title FROM skills WHERE idSkills BETWEEN 5 AND 8'),
			];
			$return = [[], []];

			for($i = 0; $i < 2; $i++)
				while($out = $req[$i]->fetch(PDO::FETCH_ASSOC))
					array_push($return[$i], $out);

			return $return;
		}

		public function getSkillsStatus($bdd) {
			$req = $bdd->query('SELECT id, status FROM skills');
			$return = [];

			while($out = $req->fetch(PDO::FETCH_ASSOC))
				array_push($return, $out);

			return $return;
		}

		public function getExperiences($bdd) {
			$req = $bdd->query('SELECT * FROM experiences ORDER BY idExperiences DESC');
			$return = [];

			while($out = $req->fetch(PDO::FETCH_NUM))
				array_push($return, $out);

			return $return;
		}

		public function getFormations($bdd) {
			$req = $bdd->query('SELECT * FROM formations ORDER BY idFormations DESC');
			$return = [];

			while($out = $req->fetch(PDO::FETCH_NUM))
				array_push($return, $out);

			return $return;
		}
	}

	/**
	 * END
	 */
