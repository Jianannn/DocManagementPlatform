var add = '/upload/寒假返家统计表收集/1618852567_test1.zip';
var msg_id = window.name;
function doupload(){
    $.ajaxFileUpload
    (
        {
            url: '/src/controllers/util/stuUpload.php',  //用于文件上传的服务器端请求地址
            dataType: 'text', //返回值类型 一般设置为json
            fileElementId: 'file1', //文件上传域的ID
            success: function (data)  //服务器成功响应处理函数
            {
                if (data=="400ExeErr") { alert("文件扩展名错误");}
                else if (data=="400FileSizeErr") {alert("文件过大");}
                else{
                    alert("上传成功");
                    var addressp2 = add;
                    var addressp1 = '/src/controllers/util';
                    var address = addressp1 + addressp2;
                    $("#address").html(address);
                }
            },
            error: function (data, status, e)//服务器响应失败处理函数
            {
                alert(e);
            }
        }
    )
}

$(document).ready(function() {
    var msg_id = window.name;
    var download_address = '';
    $.post("/src/controllers/util/getEditInfo.php",{"msg_id":msg_id},function (data) {
        console.log(data);
        var json = JSON.parse(data);
        $('#title').val(json[0].title);
        $('#content').val(json[0].content);
        $('#example-daterange1').val(json[0].begin_date);
        $('#example-daterange2').val(json[0].end_date);
        download_address = json[0].address;
        if (download_address == ''){
            $('#download').html("无附件");
        }else {
            $('#download').html(download_address);
        }
    });

    $('#submitBt').click(function (){
        var url =  $('#address').text();
        if (url == '' ){
            alert('请上传文件');
        }else {
            $.post("/src/controllers/util/editConform.php",{"msg_id":msg_id},function (data) {
                if (data == 1){
                    alert("添加成功！");
                    history.back(-1);
                }else {
                    alert("添加失败");
                }
            });
        }
    });

    $('#goBackBt').click(function (){
        history.back(-1);
    });

    $('#download').click(function (){
        var downloadURL = 'http://localhost:8888/';
        var addressInfo = $('#download').html();
        if (addressInfo == '无附件'){
            alert("当前任务无附件");
        }else {
            downloadURL += addressInfo;
            var truthBeTold = window.confirm("您确定要下载附件文件吗？");
            if (truthBeTold) {
                window.location= downloadURL;
            }
        }
    });
});