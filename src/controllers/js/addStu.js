$(document).ready(function(){

    $("#submitBt").click(function(){
        var stu_loginname = $("#login-name-input").val();
        var stu_name = $("#name-input").val();
        var stu_phone = $("#phone-input").val();
        var stu_dept = $("#dept-input").val();
        var stu_sex = $('input:radio[name="sex-inline-radios"]:checked').val();
        var stu_class = $("#class-input").val();
        console.log(stu_loginname,stu_name,stu_phone,stu_dept,stu_sex,stu_class);
        $.post("/src/controllers/util/addNewStu.php",{"stu_loginname":stu_loginname,"stu_name":stu_name,"stu_phone":stu_phone,"stu_dept":stu_dept,"stu_sex":stu_sex,"stu_class":stu_class},function (data) {
            if (data == 1){
                alert("添加成功");
                location.reload();
            }
            else {
                alert("添加失败");
                location.reload();
            }
        });
    });

});