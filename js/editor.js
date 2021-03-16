$(document).ready(function(){
    var E = window.wangEditor;
    var editor = new E('#testtextarea');

    editor.customConfig.uploadImgServer = '../../upload/wangImages';  // 上传图片到服务器
    // 2M
    editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024;
    // 限制一次最多上传 1 张图片，示例演示一张图片上传，多张图片不做演示
    editor.customConfig.uploadImgMaxLength = 1;
    // 自定义文件名
    editor.customConfig.uploadFileName = 'file';
    // 将 timeout 时间改为 3s
    editor.customConfig.uploadImgTimeout = 3000;

    editor.customConfig.uploadImgHooks = {
        before: function (xhr, editor, files) {
            // 图片上传之前触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件

            // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            // return {
            //     prevent: true,
            //     msg: '放弃上传'
            // }
            // alert("前奏");
        },
        success: function (xhr, editor, result) {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            // var url = result.data.url;
            // alert(JSON.stringify(url));
            // editor.txt.append(url);
            // alert("成功");
        },
        fail: function (xhr, editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            alert("失败");
        },
        error: function (xhr, editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            // alert("错误");
        },
        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            var url = result.url;
            insertImg(url);
            // result 必须是一个 JSON 格式字符串！！！否则报错
        }
    }
    // 设置内容
    editor.create();
});