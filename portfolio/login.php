<?php
	$login = array("user", "pass");
	
	session_start();
	if($_SERVER["REQUEST_METHOD"] && ($_POST["user"] === $login[0] && $_POST["pass"] === $login[1])) {
		$username = htmlspecialchars($_POST["user"]);
		$_SESSION["login"] = $username;
		setcookie("login", $username, time()+3600);
	}
	
	if(isset($_GET["logoff"])) {
		session_destroy();
		setcookie("login", "", time()-3600);
		unset($_COOKIE["login"]);
	}
	
	header("location: {$_GET["path"]}");
?>
