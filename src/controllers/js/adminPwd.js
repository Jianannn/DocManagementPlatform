$(document).ready(function(){
    $("#submitBt").click(function(){
        var old_pwd = $("#pwd-input").val();
        var new_pwd = $("#new-pwd-input").val();
        var repeat_pwd = $("#new-pwd-repeat-input").val();
        console.log(old_pwd,new_pwd,repeat_pwd);
        if (old_pwd === ''||new_pwd === ''||repeat_pwd === ''){
            alert("请输入完整密码");
            $(".form-control").val('');
        }else if (new_pwd !== repeat_pwd){
            alert("两次输入的新密码不同");
            $("#new-pwd-input").val('');
            $("#new-pwd-repeat-input").val('');
        }else if (new_pwd === old_pwd){
            alert("新密码与原密码相同");
            $(".form-control").val('');
        }else {
            $.post("/src/controllers/util/adminPwd.php",{"old_pwd":old_pwd,"new_pwd":new_pwd},function (data) {
                console.log(data);
                if (data == 1){
                    alert("修改成功");
                }
                else if (data == 2){
                    alert("修改失败");
                }
                else {
                    alert("原密码输入有误");
                    $(".form-control").val('');
                }
            });
        }

    });

});