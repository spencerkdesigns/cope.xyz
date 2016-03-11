<?php

session_start();
//SET SESSION DATA TO AN EMPTY ARRAY
$_SESSION = array();
//EXPIRE THEIR COOKIE FILES
if(isset($_COOKIE["id"]) && isset($_COOKIE["user"]) && isset($_COOKIE["pass"])){
    setcookie("id", '', strtotime('-5 days'), '/');
    setcookie("user", '', strtotime('-5 days'), '/');
    setcookie("pass", '', strtotime('-5 days'), '/');
}
//DESTROY THE SESSION VARIABLE
session_destroy();
//DOUBLE CHECK TO SEE IF THEIR SESSIONS EXIST
if(isset($_SESSION['username'])){
    header("location: message.php?msg=Error:_Logout_Failed");
} else{
    header("location: ../../index.php");
    exit();
}