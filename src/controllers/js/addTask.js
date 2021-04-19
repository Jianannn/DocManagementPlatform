function doupload(){
    $.ajaxFileUpload
    (
        {
            url: '/src/controllers/util/adminUpload.php',  //用于文件上传的服务器端请求地址
            dataType: 'text', //返回值类型 一般设置为json
            fileElementId: 'file1', //文件上传域的ID
            success: function (data)  //服务器成功响应处理函数
            {
                if (data=="400ExeErr") { alert("文件扩展名错误");}
                else if (data=="400FileSizeErr") {alert("文件过大");}
                else{
                    alert("上传成功");
                    var addressp2 = data.slice(1);
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
    $('#selectorGroup').multiselect({
        enableClickableOptGroups: true,
        enableCollapsibleOptGroups: true,
        enableFiltering: true,
        includeSelectAllOption: true
    });

    $('#submitBt').click(function (){
        var selectResult = $('#selectorGroup').val();
        var title =  $('#title').val();
        var content =  $('#content').val();
        var begin =  $('#example-daterange1').val();
        var end =  $('#example-daterange2').val();
        var url =  $('#address').text();
        if (selectResult == '' ||title== '' ||content== '' ||begin== '' ||end== '' ){
            alert('请填写完整的任务主题/内容/起止日期/指派人员');
        }else {
            selectResult = selectResult.toString();
            $.post("/src/controllers/util/addNewTask.php",{"selectResult":selectResult,"title":title,"content":content,"begin":begin,"end":end,"url":url},function (data) {
                console.log(data);
                alert("添加成功！");
                history.back(-1);
            });
        }
        console.log(selectResult);
    });

    $.post("/src/controllers/util/getAllStu.php",{ },function (data) {
        var html="";
        var json = JSON.parse(data);
        console.log(json);
        for (let i = 0;i < json.length;i++){
            html+=' <option value="' + json[i].stu_id + '">' + json[i].stu_class + '-' + json[i].stu_name + '</option>';
        }
        console.log(html);
        $("#selectorGroup").html(html);
    });
});