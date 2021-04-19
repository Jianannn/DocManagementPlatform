$(document).ready(function(){
    $.post("/src/controllers/util/stuBrief.php",{ },function (data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        var htmlCount = json.msgCount +'  件';
        var htmlUndone = json.msgUndone +'  件';
        var nameInfo = json.name;
        var classInfo = json.class;
        $("#count").html(htmlCount);
        $("#undone").html(htmlUndone);
        $("#name").html(classInfo +'-'+ nameInfo);
    });

    $.post("/src/controllers/util/stuMain.php",{ },function (data) {
        var yellow = '<span class="label label-warning">已提交</span>';
        var green = '<span class="label label-success">进行中</span>';
        var red = '<span class="label label-danger">已停止</span>';
        var html="";
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        for (let i = 0;i < json.length;i++){
            var stateHTML = '';
            console.log(json[i].submitState == 1);
            if (json[i].submitState == 1){
                stateHTML = yellow;
            }else if(json[i].flag == 1){
                stateHTML = green;
            }else if(json[i].flag == 2){
                stateHTML = red;
            }
            html+=' <tr>' +
                ' <td>'+json[i].id+'</td>' +
                ' <td>'+json[i].title+'</td>' +
                ' <td>'+json[i].begin_date+'</td>' +
                ' <td>'+json[i].end_date+'</td>' +
                ' <td>'+ stateHTML +'</td>' +
                ' <td>'+json[i].issuer_name+'</td> ' +
                '</tr>';
        }
        console.log(html);
        $("#taskInfo").html(html);
    });

});