<?php
	// contact.php
	
	function isMail($email) { return filter_var($email, FILTER_VALIDATE_EMAIL); }
	function isPhone($phone) { return preg_match("/^[0-9 ]*$/", $phone); }
	function verifyInput($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
	
	$posting = array(
		'prenom' => NULL, 'prenomError' => NULL,
		'nom' => NULL, 'nomError' => NULL,
		'mail' => NULL, 'mailError' => NULL,
		'tel' => NULL, 'telError' => NULL,
		'msg' => NULL, 'msgError' => NULL,
		'passed' => false
	);
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$posting['prenom'] = verifyInput($_POST['prenom']);
		$posting['nom'] = verifyInput($_POST['nom']);
		$posting['mail'] = verifyInput($_POST['mail']);
		$posting['tel'] = verifyInput($_POST['tel']);
		$posting['msg'] = verifyInput($_POST['msg']);
		$posting['passed'] = true;
		$to = "anon.dark97@gmail.com";
		$text = "";
		
		if(empty($posting['prenom'])) { $posting['prenomError'] = "Le champs du prénom est vide !"; $posting['passed'] = false; } else { $text .= "Prénom: {$posting['prenom']}\n"; }
		if(empty($posting['nom'])) { $posting['nomError'] = "Le champs du nom est vide !"; $posting['passed'] = false; } else { $text .= "Nom: {$posting['nom']}\n"; }
		if(!isMail($posting['mail'])) { $posting['mailError'] = "Le champs de l' Email n'est pas valide !"; $posting['passed'] = false; } else { $text .= "Mail: {$posting['mail']}\n"; }
		if(!isPhone($posting['tel'])) { $posting['telError'] = "Le champs du numéro de téléphone est incorrect !"; $posting['passed'] = false; } else { $text .= "Téléphone: {$posting['tel']}\n"; }
		if(empty($posting['msg'])) { $posting['msgError'] = "Le champs du message est vide !"; $posting['passed'] = false; } else { $text .= "Message: {$posting['msg']}\n"; }
		if($posting['passed']) {
			$headers = "From: {$posting['nom']} {$posting['prenom']} <{$posting['mail']}>\r\nReply-To: {$posting['mail']}";
			mail($to, "Visiteur du CV", $text, $headers);
			$posting['prenom'] = $posting['nom'] = $posting['mail'] = $posting['tel'] = $posting['msg'] = NULL;
		}
		
		echo(json_encode($posting));
	}
	
	// END
?>
