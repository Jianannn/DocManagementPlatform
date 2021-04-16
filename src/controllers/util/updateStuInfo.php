<?php
require "connect.php";//链接数据库

$stu_id = $_POST["stu_id"];
$stu_loginname = $_POST["stu_loginname"];
$stu_name = $_POST["stu_name"];
$stu_phone = $_POST["stu_phone"];
$stu_dept = $_POST["stu_dept"];
$stu_sex = $_POST["stu_sex"];
$stu_class = $_POST["stu_class"];

$sql="UPDATE stu SET stu_name='".$stu_name."', stu_loginname='".$stu_loginname."',stu_phone='".$stu_phone."',stu_dept='".$stu_dept."',stu_sex='".$stu_sex."',stu_class='".$stu_class."' WHERE stu_id='".$stu_id."';";
$rs = mysqli_query($db,$sql);

echo $rs;

?>