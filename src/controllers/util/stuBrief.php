<?php
require "connect.php";//链接数据库

$stu_id = 20001;

$arr = array();
$sql = "SELECT COUNT(1) FROM msg WHERE recipien_id ='".$stu_id."'AND flag !=0 ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}
$msgCount = $arr[0][0];

$brr = array();
$sql = "SELECT COUNT(1) FROM msg WHERE recipien_id ='".$stu_id."'AND submit = 0 ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($brr, $rows);
}
$msgUndone = $brr[0][0];

$crr = array();
$sql = "SELECT * FROM stu WHERE stu_id ='".$stu_id."' ;";
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($crr, $rows);
}
$name = $crr[0][7];
$class = $crr[0][5];
//组装json
$data=[
    'msgCount'=>$msgCount,
    'msgUndone'=>$msgUndone,
    'name'=>$name,
    'class'=>$class
];
echo json_encode($data);//输出json数据

?>
