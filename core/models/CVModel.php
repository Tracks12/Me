<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : CVModel.php
	 */

	abstract class CVModel extends DataBase {
		/**
		 * get return network table
		 * @return array network link
		 */
		public function getNetwork(): array {
			$bdd = self::connect();
			$req = $bdd->query('
				SELECT `name`, `title`, `link`
				FROM `network`
			');

			return $req->fetchAll(PDO::FETCH_ASSOC);
		}

		/**
		 * get return skills table
		 * @return array [skill-row-1, skill-row-2]
		 */
		public function getSkills(): array {
			$bdd = self::connect();
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

			return [
				$req[0]->fetchAll(PDO::FETCH_ASSOC),
				$req[1]->fetchAll(PDO::FETCH_ASSOC)
			];
		}

		/**
		 * get return skills status table
		 * @return array skills status in percent
		 */
		public function getSkillsStatus(): array {
			$bdd = self::connect();
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

		/**
		 * get return experiences table
		 * @return array professional experiences
		 */
		public function getExperiences(): array {
			$bdd = self::connect();
			$req = $bdd->query('
				SELECT *
				FROM `experiences`
				ORDER BY `idExperiences` DESC
			');

			return $req->fetchAll(PDO::FETCH_NUM);
		}

		/**
		 * get return formations table
		 * @return array formations & graduations
		 */
		public function getFormations(): array {
			$bdd = self::connect();
			$req = $bdd->query('
				SELECT *
				FROM `formations`
				ORDER BY `idFormations` DESC
			');

			return $req->fetchAll(PDO::FETCH_NUM);
		}

		/**
		 * get return contact table
		 * @return array contact content
		 */
		public function getContacts(): array {
			$bdd = self::connect();
			$req = $bdd->query('
				SELECT *
				FROM `contacts`
				ORDER BY `idContacts` ASC
			');

			return $req->fetchAll(PDO::FETCH_ASSOC);
		}

		/**
		 * insert a contact request in contact table
		 * @param array $data values of contact request
		 * @return bool [true/false]
		 */
		public function insertContactRequest(array $data): bool {
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

			return ($req->execute($arr)) ? true : false;
		}
	}

	/**
	 * END
	 */
