<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 18/03/2020 10:52
	 * Page   : connect.php
	 */

	class bdd {
		public static function disconnect() {
			return self::$bdd['db'] = NULL;
		}

		public static function connect() {
			try {
				self::$bdd['db'] = new PDO(
					'mysql:host='.self::$bdd['host'].'; dbname='.self::$bdd['name'].'; charset='.self::$bdd['char'],
					self::$bdd['user'],
					self::$bdd['pass'],
					array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING)
				);
			}

			catch(Exception $e) {
				die("[Err]:[{$e->getmessage()}]");
			}

			return self::$bdd['db'];
		}

		private static $bdd = array(
			"db"   => NULL,
			"host" => "localhost",
			"name" => "...",
			"char" => "utf8",
			"user" => "...",
			"pass" => "..."
		);
	}

	/**
	 * END
	 */
