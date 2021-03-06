<!DOCTYPE html>
<!-- index.html -->
<?php session_start(); ?>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Login CSS Design UI 3.0</title>
		<link rel="stylesheet" type="text/css" href="./style.css" />
	</head>
	<body>
		<article class="login">
			<?php
				if(isset($_SESSION["login"])) { echo("<h1>Welcome {$_COOKIE["login"]} !</h1>"); }
				if(isset($_COOKIE["PHPSESSID"])) { echo("[{$_COOKIE["PHPSESSID"]}]<br /><br />"); }
			?>
			<h2>Sign In</h2>
			<form method="POST" action="../login.php?path=./login-design-UI_3.0">
				<div class="inputBox">
					<input type="text" name="user" placeholder="Username" required />
					<input type="password" name="pass" placeholder="Password" required />
				</div>
				<input type="submit" value="Login" />
				<?php
					if(isset($_SESSION["login"])) { echo("<a href='../login.php?logoff&path=./login-design-UI_3.0'>Disconnect</a>"); }
				?>
			</form>
		</article>
	</body>
</html>
<!-- END -->
