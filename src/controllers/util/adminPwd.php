<?php
require "connect.php";//链接数据库
$admin_id = 100001;

$arr = array();
$old_pwd = $_POST["old_pwd"];
$new_pwd = $_POST["new_pwd"];
$flag = 0;

$sql="SELECT * FROM admin WHERE admin_id='".$admin_id."';";
$rs = mysqli_query($db,$sql);

while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}
$database_pwd = $arr[0][1];

if ($database_pwd == $old_pwd) {
    $sql = "UPDATE admin SET admin_pwd='" . $new_pwd . "' WHERE admin_id='" . $admin_id . "';";
    $rs = mysqli_query($db, $sql);
    if ($rs == true) {
        $flag = 1;
    }else{
        $flag = 2;
    }
}
echo $flag
?>