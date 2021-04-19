var field = 'title';
$(document).ready(function(){
    $(document).keydown(function(event){
        if(event.keyCode===13){
            var searchInput = $("#searchInput").val();
            console.log(field,searchInput);
            $.post("/src/controllers/util/adminTaskSearch.php",{"type":field,"input":searchInput},function (data) {
                var green = '<span class="label label-success">进行中</span>';
                var red = '<span class="label label-danger">已停止</span>';
                var html="";
                var json = JSON.parse(data);
                for (let i = 0;i < json.length;i++){
                    var stateHTML = '';
                    if(json[i].flag == 1){
                        stateHTML = green;
                    }else if(json[i].flag == 2){
                        stateHTML = red;
                    }
                    html+=' <tr>' +
                        ' <td id="taskID">'+json[i].id+'</td>' +
                        ' <td>'+json[i].title+'</td>' +
                        ' <td>'+json[i].begin_date+'</td>' +
                        ' <td>'+json[i].end_date+'</td>' +
                        ' <td>'+ stateHTML +'</td>' +
                        ' <td>'+json[i].issuer_name+'</td> ' +
                        ' <td>' +
                        ' <div class="btn-group">' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="进度" data-toggle="tooltip" id="progressBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-eye"></i></a>' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="下载" data-toggle="tooltip" id="downloadBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-download"></i></a>' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="暂停" data-toggle="tooltip" id="pauseBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pause"></i></a>' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="开始" data-toggle="tooltip" id="beginBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-play"></i></a>' +
                        ' <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip" id="deleteBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-window-close"></i></a>' +
                        ' </div>' +
                        ' </td>' +
                        ' </tr>' ;
                }
                $("#taskInfo").html(html);
            });
        }
    });

    $('.search-bar .dropdown-menu a').click(function() {
        field = $(this).data('field') || '';
        $('#search-field').val(field);
        $('#search-btn').html($(this).text() + ' <span class="caret"></span>');
    });

    $.post("/src/controllers/util/adminMain.php",{ },function (data) {
        // var yellow = '<span class="label label-warning">已提交</span>';
        var green = '<span class="label label-success">进行中</span>';
        var red = '<span class="label label-danger">已停止</span>';
        var html="";
        var json = JSON.parse(data);
        for (let i = 0;i < json.length;i++){
            var stateHTML = '';
            if(json[i].flag == 1){
                stateHTML = green;
            }else if(json[i].flag == 2){
                stateHTML = red;
            }
            html+=' <tr>' +
                ' <td id="taskID">'+json[i].id+'</td>' +
                ' <td>'+json[i].title+'</td>' +
                ' <td>'+json[i].begin_date+'</td>' +
                ' <td>'+json[i].end_date+'</td>' +
                ' <td>'+ stateHTML +'</td>' +
                ' <td>'+json[i].issuer_name+'</td> ' +
                ' <td>' +
                ' <div class="btn-group">' +
                ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>' +
                ' <a class="btn btn-xs btn-default" href="#!" title="进度" data-toggle="tooltip" id="progressBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-eye"></i></a>' +
                ' <a class="btn btn-xs btn-default" href="#!" title="下载" data-toggle="tooltip" id="downloadBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-download"></i></a>' +
                ' <a class="btn btn-xs btn-default" href="#!" title="暂停" data-toggle="tooltip" id="pauseBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pause"></i></a>' +
                ' <a class="btn btn-xs btn-default" href="#!" title="开始" data-toggle="tooltip" id="beginBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-play"></i></a>' +
                ' <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip" id="deleteBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-window-close"></i></a>' +
                ' </div>' +
                ' </td>' +
                ' </tr>' ;
        }
        $("#taskInfo").html(html);
    });

});

function edit(id,name){
    var taskID =  parseInt(name);
    if (id == "editBt"){
        alert(field);
        alert("开发中");
    }else if (id == "progressBt"){
        alert("开发中");
    }else if (id == "downloadBt"){
        var downloadURL = 'http://localhost:8888/src/controllers/util/upload/zip/';
        $.post("/src/controllers/util/getTaskInfo.php",{"taskID":taskID},function (data) {
            var json = JSON.parse(data);
            var title = json[0].task_title;
            downloadURL += title +'.zip';
            var truthBeTold = window.confirm("您确定要下载文件吗？");
            if (truthBeTold) {
                window.location= downloadURL;
            }
        });

    }else if (id == "pauseBt"){
        var truthBeTold = window.confirm("您确定要暂停此任务吗？");
        if (truthBeTold) {
            $.post("/src/controllers/util/pauseTask.php",{"taskID":taskID},function (data) {
                if (data == 1){
                    alert("任务已暂停");
                    location.reload();
                }else {
                    alert("修改失败");
                }
            });
        }
    }else if (id == "beginBt"){
        var truthBeTold = window.confirm("您确定要开始此任务吗？");
        if (truthBeTold) {
            $.post("/src/controllers/util/beginTask.php",{"taskID":taskID},function (data) {
                console.log(data);
                if (data == 1){
                    alert("任务已开始");
                    location.reload();
                }else {
                    alert("修改失败");
                }
            });
        }
    }else if (id == "deleteBt"){
        var truthBeTold = window.confirm("您确定要删除此任务吗？本次操作不可撤销。");
        if (truthBeTold) {
            $.post("/src/controllers/util/deleteTask.php",{"taskID":taskID},function (data) {
                console.log(data);
                if (data == 1){
                    alert("任务已删除");
                    location.reload();
                }else {
                    alert("修改失败");
                }
            });
        }
    }

}

