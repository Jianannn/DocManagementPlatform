<?php
require "connect.php";//链接数据库

$admin_id = 10001;
$type = $_POST["type"];
$input = $_POST["input"];

if($type == "title"){
    $sqla = "SELECT * from task where issuer_id ='".$admin_id."' and title like'%".$input."%' ;";
}
else if ($type == "id"){
    $sqla = "SELECT * from task where issuer_id ='".$admin_id."' and task_id like'%".$input."%' ;";
}

$arr = array();
$rs = mysqli_query($db, $sqla);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $crr = array();
    $sql = "SELECT * from admin where admin_id ='".$arr[$i][5]."' ;";//查询admin数据库
    $rs = mysqli_query($db,$sql);
    while ($rows = mysqli_fetch_array($rs)) {
        array_push($crr, $rows);
    }
    if($arr[$i][6] != 0){ //判断是否停止
        $brr[]=array("id"=>$arr[$i][0],"title"=>$arr[$i][1],"begin_date"=>$arr[$i][3],"end_date"=>$arr[$i][4],"issuer_name"=>$crr[0][6],"flag"=>$arr[$i][6]);
    }
}

echo json_encode($brr);//输出json数据

?>