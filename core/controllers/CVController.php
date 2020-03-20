<?php
	/**
	 * Auteur : CARDINAL Florian
	 * Date   : 19/03/2020 01:04
	 * Page   : CVcontroller.php
	 */

	class controller {
		public function contact($data) {
			$post = [
				"value"		=> [
					"fname"	=> NULL, "mail"	=> NULL,
					"name"	=> NULL, "tel"	=> NULL,
					"msg"		=> NULL
				],
				"error"		=> [
					"fname"	=> NULL, "mail"	=> NULL,
					"name"	=> NULL, "tel"	=> NULL,
					"msg"		=> NULL
				],
				"passed"	=> true
			];
			$error = "Ce champ n'est pas valide !";

			$post["value"] = [
				"fname"	=> services::isInput($data["fName"]),
				"name"	=> services::isInput($data["name"]),
				"mail"	=> services::isInput($data["mail"]),
				"tel"		=> services::isInput($data["phone"]),
				"msg"		=> services::isInput($data["msg"])
			];

			$mail = [
				"header"	=> NULL,
				"to"			=> "cardinal.florian.erwan@gmail.com",
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

			if(!services::isMail($post["value"]["mail"])) {
				$post["error"]["mail"] = $error;
				$post["passed"] = false;
			}

			else
				$mail["txt"] .= "Mail: {$post['value']['mail']}\n";

			if(!services::isPhone($post["value"]["tel"])) {
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

			if($post["passed"]) {
				$mail["header"] = "From: {$post['value']['name']} {$post['value']['fname']} <{$post['value']['mail']}>\r\nReply-To: {$post['value']['mail']}";
				mail($mail["to"], "Contact Web CV", $mail["txt"], $mail["header"]);
				$post["value"] = NULL;
			}

			return json_encode($post);
		}
	}

	/**
	 * END
	 */