<?php
require "connect.php";//链接数据库

$stu_id = 20001;
$type = $_POST["type"];
$input = $_POST["input"];

if($type == "id"){
//    $sql = "SELECT * from msg where recipien_id ='".$stu_id."' and issuer_id like'%".$input."%' ;";
}
else if ($type == "title"){
    $sql = "SELECT * from msg where recipien_id ='".$stu_id."' and title like'%".$input."%' ;";
}
//echo $sql;
$arr = array();
$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $crr = array();
    $sql = "SELECT * from admin where admin_id ='".$arr[$i][4]."' ;";//查询admin数据库
    $rs = mysqli_query($db,$sql);
    while ($rows = mysqli_fetch_array($rs)) {
        array_push($crr, $rows);
    }
    if($arr[$i][6] != 0){ //判断是否停止
        $brr[]=array("id"=>$arr[$i][0],"title"=>$arr[$i][1],"begin_date"=>$arr[$i][3],"end_date"=>$arr[$i][7],"issuer_name"=>$crr[0][6],"flag"=>$arr[$i][6],"stu_submit"=>$arr[$i][8]);
    }
}

echo json_encode($brr);//输出json数据

?>