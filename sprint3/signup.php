<?php
session_start();
	include("connection.php");
	include("functions.php");
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$confirm = $_POST['confirm'];

		if(!empty($username) && !empty($password)&&!empty($confirm)){
			if($password == $confirm){
				$usernameGetter = "SELECT * FROM users WHERE user_name = '$username';";
				$result = $conn -> query($usernameGetter);
				if($result -> num_rows == 0){
					$userId = random_num(10);
					$insertQuery = "INSERT INTO users (user_id, user_name, password) VALUES('$userId', '$username', '$password');";
					if($conn->query($insertQuery)){
						header("location:login.php");
					}
				}
				else{
					'<script>alert("Username is already taken")</script>';
				}
			}
			else{
				echo '<script>alert("Password Does Not Match")</script>';
			}

		}
		else{
			echo '<script>alert("Fill in Required Fields")</script>';
		}
	}
	$conn -> close();


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box-cover">
        <div class="form">
            <div class="header">
                <h1 class="logo">load<span>out</span></h1>
                <h1 class="title">Sign Up </h1>
            </div>
            <form   action="" method="post">
                <table>
                    <tr>
                        <td class="name">
                            Username
                        </td>
                        <td>
                            <input class="text" type="text" name="username">
                        </td>
                    </tr>
                    <tr>
                        <td class="name">
                            Password
                        </td>
                        <td>
                            <input class="text" type="text" name="password">
                        </td>
                    </tr>
					<tr>
                        <td class="name">
                            Confirm Password
                        </td>
                        <td>
                            <input class="text" type="text" name="confirm">
                        </td>
                    </tr>
                </table>
                <div class="bot">
                    <input class="button" type="submit" value="Submit">
                    <br>
                    <br>
                    <a href="login.php">Cancel</a>
                </div>

            </form>
        </div>


    </div>
</body>
</html>