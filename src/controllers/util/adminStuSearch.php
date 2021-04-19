<?php
require "connect.php";//链接数据库

$type = $_POST["type"];
$input = $_POST["input"];

if($type == "name"){
    $sqla = "SELECT * from stu where stu_name like'%".$input."%' ;";
}
else if ($type == "id"){
    $sqla = "SELECT * from stu where stu_id like'%".$input."%' ;";
}
else if ($type == "phone"){
    $sqla = "SELECT * from stu where stu_phone like'%".$input."%' ;";
}

$arr = array();
$rs = mysqli_query($db, $sqla);
while ($rows = mysqli_fetch_array($rs)) {
    array_push($arr, $rows);
}

$brr= array();
for($i=0; $i<count($arr);$i++){
    $brr[]=array("stu_id"=>$arr[$i][0],"stu_loginname"=>$arr[$i][2],"stu_name"=>$arr[$i][7],"stu_sex"=>$arr[$i][3],"stu_phone"=>$arr[$i][6],"stu_dept"=>$arr[$i][4],"stu_class"=>$arr[$i][5],"stu_flag"=>$arr[$i][8]);
}

echo json_encode($brr);//输出json数据

?>