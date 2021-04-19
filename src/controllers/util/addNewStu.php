<?php
require "connect.php";//链接数据库

$stu_loginname = $_POST["stu_loginname"];
$stu_name = $_POST["stu_name"];
$stu_phone = $_POST["stu_phone"];
$stu_dept = $_POST["stu_dept"];
$stu_sex = $_POST["stu_sex"];
$stu_class = $_POST["stu_class"];

$sql = "insert into stu(stu_loginname,stu_name,stu_phone,stu_dept,stu_sex,stu_class) values('".$stu_loginname."','".$stu_name."','".$stu_phone."','".$stu_dept."','".$stu_sex."','".$stu_class."');";
$rs = mysqli_query($db,$sql);

echo $rs;

?>
