<?php
require "connect.php";//链接数据库
$stu_id = $_POST["stu_id"];
$arr = array();
$sql="SELECT * FROM stu WHERE stu_id='".$stu_id."';";

$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $brr[]=array("stu_id"=>$arr[$i][0],"stu_loginname"=>$arr[$i][2],"stu_name"=>$arr[$i][7],"stu_sex"=>$arr[$i][3],"stu_phone"=>$arr[$i][6],"stu_dept"=>$arr[$i][4],"stu_class"=>$arr[$i][5]);
}

echo json_encode($brr);//输出json数据

?>