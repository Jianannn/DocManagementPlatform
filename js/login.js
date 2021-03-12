$(function () {

    $("#loginBtn").click(function(){
        let vc = show_num.toString().replace(/,/g, "").toLowerCase();
        let user = $("#username").val();
        let pwd = $("#password").val();
        let captcha = $("#captcha").val().toLowerCase();
        let identity = $('input:radio:checked').val();
        if (captcha === vc){
            alert("验证通过");
            console.log(vc,user,pwd,captcha,identity);
        }else {
            alert("验证失败");
        }
    })

})