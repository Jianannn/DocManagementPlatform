<?php
header("Content-Type: text/html;charset=utf-8");
$MyFilePath="./upload/寒假返家统计表收集/";                //定义上传文件夹名称
$Extensions= array("zip","rar","7z"); //定义允许上传的文件扩展名
$MaxFileSize=20;                         //定义允许上传的最大文件M为单位
$Time=time();                           //时间戳
if(isset($_FILES['myFile'])){
    $file_name = $_FILES['myFile']['name'];
    $file_size = $_FILES['myFile']['size'];
    $file_tmp = $_FILES['myFile']['tmp_name'];
    $file_type = $_FILES['myFile']['type'];
    $name_arr = explode('.',$_FILES['myFile']['name']);
    $file_ext=strtolower(end($name_arr));
    /* 规定可以上传的扩展名文件 */
    if(in_array($file_ext,$Extensions)=== false){
        echo "400ExeErr";
    }
    /* 规定可以上传的文件大小 */
    if($file_size > ($MaxFileSize*1024*1024)) {
        echo "400FileSizeErr";
    }
    if(in_array($file_ext,$Extensions)=== true&&$file_size < ($MaxFileSize*1024*1024)){
        /* 把图片从临时文件夹内的文件移动到当前脚本所在的目录 */
        $NewFileName=$Time."_".$file_name;
        $AllFilePath=$MyFilePath.$NewFileName;
        move_uploaded_file($file_tmp,$AllFilePath);
        echo $AllFilePath; //返回文件路径
    }
}
