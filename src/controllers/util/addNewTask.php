<?php
require "connect.php";//链接数据库

$admin_id = 10001;
$flag = 0;
$selectResult = $_POST["selectResult"];
$title = $_POST["title"];
$content = $_POST["content"];
$begin = $_POST["begin"];
$end = $_POST["end"];
$url= $_POST["url"];
$select = explode(",", $selectResult);

$name = $_POST["title"];
$dir = iconv("UTF-8", "UTF-8",$name);//Mac不需要转换编码格式
$dir = "./upload/" . $dir;

if (!file_exists($dir)){
    mkdir ($dir,0777,true);
} else {
    $flag = 1;
}
if ($flag == 0) {
    $sql = "insert into task(title,content,begin_date,end_date,issuer_id,flag,url,folder) values('".$title."','".$content."','".$begin."','".$end."','".$admin_id."','2','".$url."','".$dir."');";
    $rs = mysqli_query($db, $sql);
    if ($rs == true){
        $arr = array();
        $sqlTaskID="SELECT task_id FROM task WHERE title ='".$title."' and issuer_id ='".$admin_id."';";
        $rsTaskID = mysqli_query($db, $sqlTaskID);
        while ($rows = mysqli_fetch_array($rsTaskID)) {
            array_push($arr, $rows);
        }
        for($i=0; $i<count($select);$i++){
            $sql ="insert into msg(title,task_id,begin_date,end_date,issuer_id,recipien_id,flag,submit) values('".$title."','".$arr[0][0]."','".$begin."','".$end."','".$admin_id."','".$select[$i]."','2','0');";
            echo $sql;
            $rs = mysqli_query($db, $sql);
        }
    }else{
        $flag = 1;
    }
}
echo $flag;
?>