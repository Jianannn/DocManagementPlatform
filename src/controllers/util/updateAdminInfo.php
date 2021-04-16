<?php
require "connect.php";//链接数据库

$admin_id = $_POST["admin_id"];
$admin_loginname = $_POST["admin_loginname"];
$admin_name = $_POST["admin_name"];
$admin_phone = $_POST["admin_phone"];
$admin_dept = $_POST["admin_dept"];
$admin_sex = $_POST["admin_sex"];

$sql="UPDATE admin SET admin_name='".$admin_name."', admin_loginname='".$admin_loginname."',admin_phone='".$admin_phone."',admin_dept='".$admin_dept."',admin_sex='".$admin_sex."' WHERE admin_id='".$admin_id."';";
$rs = mysqli_query($db,$sql);

echo $rs;

?>