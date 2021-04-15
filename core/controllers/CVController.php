<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : CVController.php
	 */

	abstract class CVController extends CVModel {
		/**
		 * ping response controller
		 */
		public static function ping(): string {
			return "pong";
		}

		/**
		 * contact form controller
		 * @param array $data array of post request
		 * @return array result of request
		 */
		public function contact(array $data): array {
			$data = Services::checkArray($data);
			$post = [
				"value"		=> $data,
				"error"		=> [
					"fname"	=> NULL,
					"name"	=> NULL,
					"mail"	=> NULL,
					"tel"		=> NULL,
					"msg"		=> NULL
				],
				"passed"	=> true
			];
			$error = "Ce champ n'est pas valide !";

			$mail = [
				"header"	=> NULL,
				"to"			=> base64_decode("Y2FyZGluYWwuZmxvcmlhbi5lcndhbkBnbWFpbC5jb20="),
				"txt"			=> ""
			];

			if(empty($post["value"]["fname"])) {
				$post["error"]["fname"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Prénom: {$post['value']['fname']}\n";

			if(empty($post["value"]["name"])) {
				$post["error"]["name"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Nom: {$post['value']['name']}\n";

			if(
				empty($post["value"]["mail"])
				|| !services::isMail($post["value"]["mail"])
			) {
				$post["error"]["mail"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Mail: {$post['value']['mail']}\n";

			if(
				empty($post["value"]["tel"])
				|| !services::isPhone($post["value"]["tel"])
			) {
				$post["error"]["tel"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Tel: {$post['value']['tel']}\n\n";

			if(empty($post["value"]["msg"])) {
				$post["error"]["msg"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Message: {$post['value']['msg']}";

			if(
				$post["passed"]
				&& CVModel::insertContactRequest($post['value'])
			) {
				$mail["header"] = "From: {$post['value']['name']} {$post['value']['fname']} <{$post['value']['mail']}>\r\nReply-To: {$post['value']['mail']}";
				mail($mail["to"], "Contact Web CV", $mail["txt"], $mail["header"]);
				$post["value"] = NULL;
			}

			return $post;
		}

		/**
		 * sign in portfolio controller
		 * @param array $data array of data form
		 * @return bool result of request
		 */
		public function portfolioSignIn(array $data): bool {
			$data = Services::checkArray($data);
			$login = array("user", "pass");
			$post = [
				"value"				=> [
					"user"			=> $data["fName"],
					"phpsessid"	=> $_COOKIE["PHPSESSID"]
				],
				"error"				=> [
					"msg"				=> "login incorrect"
				],
				"passed"			=> false
			];

			if(
				$_SERVER["REQUEST_METHOD"]
				&& (
					($data["user"] === $login[0])
					&& ($data["pass"] === $login[1])
				)
			) {
				$_SESSION["login"] = $data["user"];
				setcookie("login", $data["user"], time()+3600);

				$post["error"]["msg"] = NULL;
				$post["passed"] = true;
			}

			return $post;
		}

		/**
		 * sign out portfolio controller
		 * @return bool result of request
		 */
		public function portfolioSignOut(): bool {
			session_destroy();
			setcookie("login", "", time()-3600);
			unset($_COOKIE["login"]);

			return true;
		}
	}

	/**
	 * END
	 */
