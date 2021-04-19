<?php
require "connect.php";//链接数据库

$arr = array();
$sql="SELECT * FROM stu;";

$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $brr[]=array("stu_id"=>$arr[$i][0],"stu_name"=>$arr[$i][7],"stu_dept"=>$arr[$i][4],"stu_class"=>$arr[$i][5],"stu_phone"=>$arr[$i][6],"stu_sex"=>$arr[$i][3],"stu_flag"=>$arr[$i][8]);
}

echo json_encode($brr);//输出json数据

?>