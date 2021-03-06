<!DOCTYPE html>
<!-- index.html -->
<?php session_start(); ?>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Login CSS Design UI 2.0</title>
		<link rel="stylesheet" type="text/css" href="./style.css" />
		<script type="application/javascript" language="Javascript" src="/scripts/jquery-3.5.1.min.js"></script>
		<script type="text/javascript" language="Javascript">
			$(document).ready(function() {
				$('.signIn').click(function() {
					$('.signIn').toggleClass('active');
					$('.fold').toggleClass('active');
				});
			});
		</script>
	</head>
	<body>
		<div class="login container">
			<div class="signIn">Click To Sign In</div>
			<div class="fold">
				<?php
					if(isset($_SESSION["login"])) { echo("<h1>Welcome {$_COOKIE["login"]} !</h1>"); }
					if(isset($_COOKIE["PHPSESSID"])) { echo("[{$_COOKIE["PHPSESSID"]}]<br /><br />"); }
				?>
				<form method="POST" action="../login.php?path=./login-design-UI_2.0">
					<div class="inputBox">
						<input type="text" name="user" placeholder="Username" required />
						<input type="password" name="pass" placeholder="Password" required />
					</div>
					<input type="submit" value="Login" />
					<a onclick="forgot();" href="#">Forget Password</a>
					<p id="msgError">Login Failed</p>
					<?php
						if(isset($_SESSION["login"])) { echo("<a href='../login.php?logoff&path=./login-design-UI_2.0'>Disconnect</a>"); }
					?>
					<p id="forgot">> Username : "user";<br />> Password : "pass";</p>
				</form>
			</div>
		</div>
	</body>
	<script language="javascript" type="text/javascript">
		function forgot() { document.getElementById("forgot").style.display = "block"; }
	</script>
</html>
<!-- END -->
