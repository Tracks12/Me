<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 18/03/2020 10:52
	 * Page   : connect.php
	 */

	/**
	 * CV Data Base
	 */
	abstract class DataBase {
		// CV database handle
		private static $bdd = NULL;

		// CV auth informations
		private static $auth = [];

		/**
		 * disconnect to CV the data base
		 * @return void
		 */
		protected static function disconnect(): void {
			self::$bdd = NULL;

			return;
		}

		/**
		 * connect to the CV data base
		 * @return object[PDO] data base object
		 */
		protected static function connect(): PDO {
			try {
				self::$auth = json_decode(file_get_contents("./core/constants/config.json"), true)["database"];

				self::$bdd = new PDO(
					'mysql:host='.self::$auth['host'].'; dbname='.self::$auth['name'].'; charset='.self::$auth['char'],
					self::$auth['user'],
					self::$auth['pass'],
					[ PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING ]
				);
			}

			catch(Exception $e) {
				die("[Err]:[{$e->getmessage()}]");
			}

			return self::$bdd;
		}
	}

	/**
	 * END
	 */
