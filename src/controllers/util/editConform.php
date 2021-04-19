<?php
require "connect.php";//链接数据库

$msg_id = $_POST["msg_id"];
$arr = array();
$sql = "UPDATE msg SET submit = 1 WHERE msg_id ='".$msg_id."';";

$rs = mysqli_query($db, $sql);

echo $rs;
?>