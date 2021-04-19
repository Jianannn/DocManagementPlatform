$(document).ready(function(){
    $.post("/src/controllers/util/getAdminInfo.php",{ },function (data) {
        console.log(data);
        var json = JSON.parse(data);
        $("#id-input").val(json[0].admin_id);
        $("#login-name-input").val(json[0].admin_loginname);
        $("#name-input").val(json[0].admin_name);
        $("#phone-input").val(json[0].admin_phone);
        $("#dept-input").val(json[0].admin_dept);
        if (json[0].admin_sex == 1){
            $("#sex-radio1").attr("checked","checked");
        }
        else {
            $("#sex-radio2").attr("checked","checked");
        }
    });

    $("#submitBt").click(function(){
        var admin_id = $("#id-input").val();
        var admin_loginname = $("#login-name-input").val();
        var admin_name = $("#name-input").val();
        var admin_phone = $("#phone-input").val();
        var admin_dept = $("#dept-input").val();
        var admin_sex = $('input:radio[name="sex-inline-radios"]:checked').val();
        $.post("/src/controllers/util/updateAdminInfo.php",{"admin_id":admin_id,"admin_loginname":admin_loginname,"admin_name":admin_name,"admin_phone":admin_phone,"admin_dept":admin_dept,"admin_sex":admin_sex},function (data) {
           if (data == 1){
               alert("修改成功");
               location.reload();
           }
           else {
               alert("修改失败");
               location.reload();
           }
        });
    });

});