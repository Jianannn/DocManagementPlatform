$(function () {

    $(document).keydown(function(event){
        if(event.keyCode===13){
            $("#loginBtn").click();
        }
    });

    $("#loginBtn").click(function(){
        let vc = show_num.toString().replace(/,/g, "").toLowerCase();
        let captcha = $("#captcha").val().toLowerCase();
        console.log(vc,captcha,$('input:radio:checked').val());
        if (captcha === vc){

            $.ajax({
                url:"../src/controllers/util/login.php",
                type:"POST",
                data:{
                    "user":$("#username").val(),
                    "pwd":$("#password").val(),
                    "ident":$('input:radio:checked').val()
                },
                dataType:"json",

                success:function (data) {
                    console.log(data);
                    if((data['flag']) === 0){
                        alert("用户名或密码错误");
                    }else if((data['flag']) === 1){
                        window.location.href='src/views/admin/main.html';
                    }if((data['flag']) === 2){
                        window.location.href='src/views/user/main.html';
                    }
                },
                error:function () {
                    alert("登陆失败(01)");
                }
            })
        }else {
            alert("验证码错误");
        }

        draw(show_num)
    })
})

// $('button').click(function(){
//     $.post("test.php", {}, function(data) {
//         console.log(data);
//     });
// })