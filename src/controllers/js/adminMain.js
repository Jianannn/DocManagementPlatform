$(document).ready(function(){
    $.post("/src/controllers/util/adminBrief.php",{ },function (data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        var htmlCount = json.msgCount +'  件';
        var htmlProgress = json.msgProgress +'  件';
        var name = json.name;
        $("#count").html(htmlCount);
        $("#undone").html(htmlProgress);
        $("#name").html(name);
    });

    $.post("/src/controllers/util/adminMain.php",{ },function (data) {
        // var yellow = '<span class="label label-warning">已提交</span>';
        var green = '<span class="label label-success">进行中</span>';
        var red = '<span class="label label-danger">已停止</span>';
        var html="";
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        for (let i = 0;i < json.length;i++){
            var stateHTML = '';
            if(json[i].flag == 1){
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