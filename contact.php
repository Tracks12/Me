<?php
	/********************************
	*                               *
	*   Auteur : CARDINAL Florian   *
	*   Date   : 23/12/2018 13:59   *
	*   Page   : contact.php        *
	*                               *
	********************************/
	
	function isMail($data) { return filter_var($data, FILTER_VALIDATE_EMAIL); }
	function isPhone($data) { return preg_match("/^[0-9 ]*$/", $data); }
	function isInput($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	
	$post = array(
		value => array(fname => NULL, name => NULL, "mail" => NULL, tel => NULL, msg => NULL),
		error => array(fname => NULL, name => NULL, "mail" => NULL, tel => NULL, msg => NULL),
		passed => false);
	$error = "Ce champ n'est pas valide !";
	
	if($_SERVER[REQUEST_METHOD] == 'POST') {
		$post[value][fname] = isInput($_POST[fName]);
		$post[value][name] = isInput($_POST[name]);
		$post[value]["mail"] = isInput($_POST["mail"]);
		$post[value][tel] = isInput($_POST[phone]);
		$post[value][msg] = isInput($_POST[msg]);
		$post[passed] = true;
		$mail = array(
			"header" => NULL,
			to => "cardinal.florian.erwan@gmail.com",
			txt => "");
		
		if(empty($post[value][fname])) { $post[error][fname] = $error; $post[passed] = false; } else { $mail[txt] .= "Prénom: {$post[value][fname]}\n"; }
		if(empty($post[value][name])) { $post[error][name] = $error; $post[passed] = false; } else { $mail[txt] .= "Nom: {$post[value][name]}\n"; }
		if(!isMail($post[value]["mail"])) { $post[error]["mail"] = $error; $post[passed] = false; } else { $mail[txt] .= "Mail: {$post[value]['mail']}\n"; }
		if(!isPhone($post[value][tel])) { $post[error][tel] = $error; $post[passed] = false; } else { $mail[txt] .= "Tel: {$post[value][tel]}\n\n"; }
		if(empty($post[value][msg])) { $post[error][msg] = $error; $post[passed] = false; } else { $mail[txt] .= "Message: {$post[value][msg]}"; }
		if($post[passed]) {
			$mail[header] = "From: {$post[value][name]} {$post[value][fname]} <{$post[value]['mail']}>\r\nReply-To: {$post[value]['mail']}";
			mail($mail[to], "Contact Web CV", $mail[txt], $mail["header"]);
			$post[value] = NULL;
		}
		
		echo(json_encode($post));
	}
	
	/**********
	*   END   *
	**********/
?>
