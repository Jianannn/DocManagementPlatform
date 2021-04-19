var field = 'title';
$(document).ready(function(){
    $(document).keydown(function(event){
        if(event.keyCode===13){
            var searchInput = $("#searchInput").val();
            $.post("/src/controllers/util/stuTaskSearch.php",{"type":field,"input":searchInput},function (data) {
                var yellow = '<span class="label label-warning">已提交</span>';
                var green = '<span class="label label-success">进行中</span>';
                var red = '<span class="label label-danger">已停止</span>';
                var html="";
                var json = JSON.parse(data);
                for (let i = 0;i < json.length;i++){
                    var htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>';
                    var stateHTML = '';
                    if(json[i].flag == 1){
                        stateHTML = green;
                    }else if(json[i].flag == 2){
                        stateHTML = red;
                        htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="return false" disabled="true"><i class="mdi mdi-pencil"></i></a>';
                    }
                    if (json[i].stu_submit == 1 && json[i].flag != 2){
                        stateHTML = yellow;
                        htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="return false" disabled="true"><i class="mdi mdi-pencil"></i></a>';
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
                        htmla +
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

    $.post("/src/controllers/util/stuTask.php",{ },function (data) {
        var yellow = '<span class="label label-warning">已提交</span>';
        var green = '<span class="label label-success">进行中</span>';
        var red = '<span class="label label-danger">已停止</span>';
        var html="";
        console.log(data);
        var json = JSON.parse(data);
        for (let i = 0;i < json.length;i++){
            var htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>';
            var stateHTML = '';
            if(json[i].flag == 1){
                stateHTML = green;
            }else if(json[i].flag == 2){
                stateHTML = red;
                htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="return false" disabled="true"><i class="mdi mdi-pencil"></i></a>';
            }
            if (json[i].stu_submit == 1 && json[i].flag != 2){
                stateHTML = yellow;
                htmla = ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="'+json[i].id+'" onclick="return false" disabled="true"><i class="mdi mdi-pencil"></i></a>';
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
                 htmla +
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
        window.name = taskID;
        window.location = '../../views/user/editTask.html';
    }
}

