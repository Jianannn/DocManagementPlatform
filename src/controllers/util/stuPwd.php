<?php
require "connect.php";//链接数据库
$stu_id = 20001;

$arr = array();
$old_pwd = $_POST["old_pwd"];
$new_pwd = $_POST["new_pwd"];
$flag = 0;

$sql="SELECT * FROM stu WHERE stu_id='".$stu_id."';";
$rs = mysqli_query($db,$sql);

while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}
$database_pwd = $arr[0][1];

if ($database_pwd == $old_pwd) {
    $sql = "UPDATE stu SET stu_pwd='" . $new_pwd . "' WHERE stu_id='" . $stu_id . "';";
    $rs = mysqli_query($db, $sql);
    if ($rs == true) {
        $flag = 1;
    }else{
        $flag = 2;
    }
}
echo $flag
?>