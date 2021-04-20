<?php
require "connect.php";//链接数据库
$taskId = $_POST["taskID"];
$admin_id = 10001;
$arr = array();
$sql="SELECT * FROM task WHERE task_id='".$taskId."' AND issuer_id = '".$admin_id."';";

$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$issuer = $arr[0][5];
$crr = array();
$sql="SELECT * FROM admin WHERE admin_id='".$issuer."';";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($crr, $rows);
}


for($i=0; $i<count($arr);$i++){
    $brr[]=array("task_folder"=>$arr[$i][8],"task_url"=>$arr[$i][7],"task_title"=>$arr[$i][1],"issuer_name"=>$crr[$i][6]);
}

echo json_encode($brr);//输出json数据

?>