<?php
require "connect.php";//链接数据库

$taskId = $_POST["taskID"];
$flag = 0;
$sql = "UPDATE stu SET stu_flag = 0 WHERE stu_id='".$taskId."';";
$rs = mysqli_query($db, $sql);
if ($rs == true) {
    $flag = 1;
}
echo $flag
?>