<?php
require "connect.php";//链接数据库

$user = $_POST["user"];
$pwd = $_POST["pwd"];
$ident = $_POST["ident"];
$flag = 0;

$arr = array();
if($user==null||$pwd==null){
    header("location:../../../index.html");//直接跳转到登录界面
}

if ($ident == "admin"){//在管理员的表中查找用户
    $sql="SELECT * FROM admin WHERE admin_loginname='".$user."' AND admin_pwd='".$pwd."';";
    $result=$db->query($sql);
    $num_users=$result->num_rows;//在数据库中搜索到符合的用户
    if($num_users!=0){
        $rs = mysqli_query($db, $sql);//获取查询结果
        while ($rows = mysqli_fetch_array($rs)) {
            array_push($arr, $rows);
        }
        $flag=1;
//        session_start();
//        $_SESSION["uid"]=$arr[0][0];
    }

}
else if ($ident == "user"){ //在学生的表中查找用户
    $sql="SELECT * FROM stu  WHERE stu_loginname='".$user."' AND stu_pwd='".$pwd."';";

    $result=$db->query($sql);
    $num_users=$result->num_rows;//在数据库中搜索到符合的用户
    if($num_users!=0){
        $rs = mysqli_query($db, $sql);//获取查询结果
        while ($rows = mysqli_fetch_array($rs)) {
            array_push($arr, $rows);
        }
        $flag=2;
//        session_start();
//        $_SESSION["uid"]=$arr[0][0];
    }
}

//组装json
$data=[
    'flag'=>$flag,
//    'userid'=>$_SESSION["uid"]
];
//返回json数据
echo json_encode($data);//输出json数据
sleep(0.5);

?>
