<?php
session_start();

include("connection.php");
include("functions.php");
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $password = $_POST['password'];

    if(!empty($username) && !empty($password)){
        $queryname = "SELECT * FROM users WHERE user_name = '$username';";
        $result = $conn -> query($queryname);
        if($result -> num_rows != 0){
            while($row = $result -> fetch_assoc()){
                if($row["password"] == $password){
                    $_SESSION['user_id'] = $row['user_id'];
                    header("location:index.php");
                }
            }
        }
        else{
            echo
            '<script>alert("Username does not exist")</script>';
        }
    }
    else{
        echo
        '<script>alert("Please fill in all the fields")</script>';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box-cover">
        <div class="form">
            <div class="header">
                <h1 class="logo">load<span>out</span></h1>
                <h1 class="title">sign in </h1>
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
                </table>
                <div class="bot">
                    <input class="button" type="submit" value="Log In">
                    <br>
                    <br>
                    <a href="signup.php">Sign Up</a>
                </div>

            </form>
        </div>


    </div>
</body>
</html>