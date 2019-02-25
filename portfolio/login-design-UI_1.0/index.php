<!DOCTYPE html>
<!-- index.html -->
<?php session_start(); ?>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Login CSS Design UI 1.0</title>
		<link rel="stylesheet" type="text/css" href="./style.css" />
	</head>
	<body>
		<article class="login">
			<?php
				if(isset($_SESSION["login"])) { echo("<h1>Welcome {$_COOKIE["login"]} !</h1>"); }
				if(isset($_COOKIE["PHPSESSID"])) { echo("[{$_COOKIE["PHPSESSID"]}]"); }
			?>
			<h2>Login</h2>
			<form method="POST" action="../login.php?path=./login-design-UI_1.0">
				<div class="inputBox">
					<input type="text" name="user" required />
					<label>Username</label>
				</div>
				<div class="inputBox">
					<input type="password" name="pass" required />
					<label>Password</label>
				</div>
				<input type="submit" value="Connect" />
				<a onclick="forgot();" href="#">Forget Password</a>
				<p id="msgError">Login Failed</p>
				<?php
					if(isset($_SESSION["login"])) { echo("<a href='../login.php?logoff&path=./login-design-UI_1.0'>Disconnect</a>"); }
				?>
				<p id="forgot">> Username : "user";<br />> Password : "pass";</p>
			</form>
		</article>
	</body>
	<script language="javascript" type="text/javascript">
		function forgot() { document.getElementById("forgot").style.display = "block"; }
	</script>
</html>
<!-- END -->
