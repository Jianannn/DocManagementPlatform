<?php
require "connect.php";//链接数据库

$arr = array();
$sql="SELECT * FROM admin WHERE admin_id='100001';";


$rs = mysqli_query($db, $sql);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $brr[]=array("admin_id"=>$arr[$i][0],"admin_loginname"=>$arr[$i][2],"admin_name"=>$arr[$i][6],"admin_sex"=>$arr[$i][3],"admin_phone"=>$arr[$i][5],"admin_dept"=>$arr[$i][4]);
}

echo json_encode($brr);//输出json数据

?>