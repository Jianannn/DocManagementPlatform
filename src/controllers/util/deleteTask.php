<?php
require "connect.php";//链接数据库
$admin_id = 10001;

$taskId = $_POST["taskID"];
$flag = 0;
$sql = "UPDATE task SET flag = 0 WHERE task_id='" . $taskId . "' AND issuer_id='" . $admin_id . "';";
$rs = mysqli_query($db, $sql);
if ($rs == true) {
    $sql = "UPDATE msg SET flag = 0 WHERE task_id='" . $taskId . "' AND issuer_id='" . $admin_id . "';";
    $rs = mysqli_query($db, $sql);
    if ($rs == true){
        $flag = 1;
    }
}
echo $flag
?>