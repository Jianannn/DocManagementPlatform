$(document).ready(function(){
    var task_id = parseInt(window.name);

    $.post("/src/controllers/util/getTaskInfo.php",{"taskID":task_id},function (data) {
        var json = JSON.parse(data);
        $("#task_id").html(task_id);
        $("#task_title").html(json[0].task_title);
        $("#task_issuer").html(json[0].issuer_name);
    });

    $.post("/src/controllers/util/getFinishedStuInfo.php",{"taskID":task_id},function (data) {
        var json = JSON.parse(data);
        var html = '';
        for (let i = 0;i < json.length;i++) {
            html += ' <tr>' +
                ' <td >' + json[i].stu_id + '</td>' +
                ' <td>' + json[i].stu_name + '</td>' +
                ' <td>' + json[i].stu_dept + '</td>' +
                ' <td>' + json[i].stu_class + '</td> ' +
                ' <td>' + json[i].stu_phone + '</td>' +
                ' </tr>';
        }
        if (json == ''){
            html = '<tr><td></td><td></td><td>无</td><td></td><td></td></tr>';
        }
        $("#finishedInfo").html(html);
    });

    $.post("/src/controllers/util/getUnfinishedStuInfo.php",{"taskID":task_id},function (data) {
        var json = JSON.parse(data);
        console.log(json);
        var html = '';
        for (let i = 0;i < json.length;i++) {
            html += ' <tr>' +
                ' <td >' + json[i].stu_id + '</td>' +
                ' <td>' + json[i].stu_name + '</td>' +
                ' <td>' + json[i].stu_dept + '</td>' +
                ' <td>' + json[i].stu_class + '</td> ' +
                ' <td>' + json[i].stu_phone + '</td>' +
                ' </tr>';
        }
        if (json == ''){
            html = '<tr><td></td><td></td><td>无</td><td></td><td></td></tr>';
        }
        $("#unfinishedInfo").html(html);
    });

});
