<?php
require "connect.php";//链接数据库
$msg_id = $_POST["msg_id"];
$stu_id = 20001;

$arr = array();
$sql="SELECT * FROM msg WHERE msg_id='".$msg_id."';";

$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}
$task_id = $arr[0][2];

$brr= array();
$sql = "SELECT * from task where task_id ='".$task_id."' ;";
$rs = mysqli_query($db,$sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($brr, $rows);
}
$crr= array();
for($i=0; $i<count($brr);$i++){
    $crr[]=array("title"=>$arr[$i][1],"content"=>$arr[$i][2],"begin_date"=>$arr[$i][3],"end_date"=>$arr[$i][4],"address"=>$brr[$i][7]);
}
echo json_encode($crr);//输出json数据

?>