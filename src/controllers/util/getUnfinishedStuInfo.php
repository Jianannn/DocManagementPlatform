<?php
require "connect.php";//链接数据库
$taskId = $_POST["taskID"];

$arr = array();
$sql = "SELECT * from msg where task_id ='".$taskId."' and submit = 0;";

$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $crr = array();
    $sql = "SELECT * from stu where stu_id ='".$arr[$i][5]."' ;";//查询admin数据库
    $rs = mysqli_query($db,$sql);
    while ($rows = mysqli_fetch_array($rs)) {
        array_push($crr, $rows);
    }
    for($s=0; $s<count($crr);$s++){
        if ($crr[$s][8] == 1){
            $brr[]=array("stu_id"=>$crr[$s][0],"stu_name"=>$crr[$s][7],"stu_dept"=>$crr[$s][4],"stu_class"=>$crr[$s][5],"stu_phone"=>$crr[$s][6]);
        }
    }
}

echo json_encode($brr);//输出json数据

?>