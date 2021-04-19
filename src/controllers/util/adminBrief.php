<?php
require "connect.php";//链接数据库

$admin_id = 10001;

$arr = array();
$sql = "SELECT COUNT(1) FROM task WHERE issuer_id ='".$admin_id."'AND flag !=0 ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}
$msgCount = $arr[0][0];

$brr = array();
$sql = "SELECT COUNT(1) FROM task WHERE issuer_id ='".$admin_id."'AND flag = 1 ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($brr, $rows);
}
$msgProgress = $brr[0][0];

$crr = array();
$sql = "SELECT admin_name FROM admin WHERE admin_id ='".$admin_id."' ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($crr, $rows);
}
$name = $crr[0][0];
//组装json
$data=[
    'msgCount'=>$msgCount,
    'msgProgress'=>$msgProgress,
    'name'=>$name
];
echo json_encode($data);//输出json数据

?>
