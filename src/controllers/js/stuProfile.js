$(document).ready(function(){
    $.post("/src/controllers/util/getStuInfo.php",{ },function (data) {
        console.log(data);
        var json = JSON.parse(data);
        $("#id-input").val(json[0].stu_id);
        $("#login-name-input").val(json[0].stu_loginname);
        $("#name-input").val(json[0].stu_name);
        $("#phone-input").val(json[0].stu_phone);
        $("#dept-input").val(json[0].stu_dept);
        $("#class-input").val(json[0].stu_class);
        if (json[0].stu_sex == 1){
            $("#sex-radio1").attr("checked","checked");
        }
        else {
            $("#sex-radio2").attr("checked","checked");
        }
    });

    $("#submitBt").click(function(){
        var stu_id = $("#id-input").val();
        var stu_loginname = $("#login-name-input").val();
        var stu_name = $("#name-input").val();
        var stu_phone = $("#phone-input").val();
        var stu_dept = $("#dept-input").val();
        var stu_sex = $('input:radio[name="sex-inline-radios"]:checked').val();
        var stu_class = $("#class-input").val();
        $.post("/src/controllers/util/updatestuInfo.php",{"stu_id":stu_id,"stu_loginname":stu_loginname,"stu_name":stu_name,"stu_phone":stu_phone,"stu_dept":stu_dept,"stu_sex":stu_sex,"stu_class":stu_class},function (data) {
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