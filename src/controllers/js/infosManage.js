var field = 'name';
$(document).ready(function(){
    $(document).keydown(function(event){
        if(event.keyCode===13){
            var searchInput = $("#searchInput").val();
            console.log(field,searchInput);
            $.post("/src/controllers/util/adminStuSearch.php",{"type":field,"input":searchInput},function (data) {
                var html="";
                var sex1 ="男";
                var sex2 ="女";
                var json = JSON.parse(data);
                console.log(json);
                for (let i = 0;i < json.length;i++) {
                    if (json[i].stu_flag == 1) {
                        var stateHTML = '';
                        if (json[i].stu_sex == 1) {
                            stateHTML = sex1;
                        } else if (json[i].stu_sex == 0) {
                            stateHTML = sex2;
                        }
                        html += ' <tr>' +
                            ' <td id="stuID">' + json[i].stu_id + '</td>' +
                            ' <td>' + json[i].stu_name + '</td>' +
                            ' <td>' + stateHTML + '</td>' +
                            ' <td>' + json[i].stu_phone + '</td>' +
                            ' <td>' + json[i].stu_dept + '</td>' +
                            ' <td>' + json[i].stu_class + '</td> ' +
                            ' <td>' +
                            ' <div class="btn-group">' +
                            ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="' + json[i].stu_id + '" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>' +
                            ' <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip" id="deleteBt" name="' + json[i].stu_id + '" onclick="edit(this.id,this.name)"><i class="mdi mdi-window-close"></i></a>' +
                            ' </div>' +
                            ' </td>' +
                            ' </tr>';
                    }
                }
                console.log(html);
                $("#taskInfo").html(html);
            });
        }
    });

    $('.search-bar .dropdown-menu a').click(function() {
        field = $(this).data('field') || '';
        $('#search-field').val(field);
        $('#search-btn').html($(this).text() + ' <span class="caret"></span>');
    });

    $.post("/src/controllers/util/getAllStu.php",{ },function (data) {
        var html="";
        var sex1 ="男";
        var sex2 ="女";
        var json = JSON.parse(data);
        console.log(json);
        for (let i = 0;i < json.length;i++) {
            if (json[i].stu_flag == 1) {
                var stateHTML = '';
                if (json[i].stu_sex == 1) {
                    stateHTML = sex1;
                } else if (json[i].stu_sex == 0) {
                    stateHTML = sex2;
                }
                html += ' <tr>' +
                    ' <td id="stuID">' + json[i].stu_id + '</td>' +
                    ' <td>' + json[i].stu_name + '</td>' +
                    ' <td>' + stateHTML + '</td>' +
                    ' <td>' + json[i].stu_phone + '</td>' +
                    ' <td>' + json[i].stu_dept + '</td>' +
                    ' <td>' + json[i].stu_class + '</td> ' +
                    ' <td>' +
                    ' <div class="btn-group">' +
                    ' <a class="btn btn-xs btn-default" href="#!" title="编辑" data-toggle="tooltip" id="editBt" name="' + json[i].stu_id + '" onclick="edit(this.id,this.name)"><i class="mdi mdi-pencil"></i></a>' +
                    ' <a class="btn btn-xs btn-default" href="#!" title="删除" data-toggle="tooltip" id="deleteBt" name="' + json[i].stu_id + '" onclick="edit(this.id,this.name)"><i class="mdi mdi-window-close"></i></a>' +
                    ' </div>' +
                    ' </td>' +
                    ' </tr>';
            }
        }
        $("#taskInfo").html(html);
    });

});

function edit(id,name){
    var taskID =  parseInt(name);
    if (id == "editBt"){
        window.name = taskID;
        window.location = '../../views/admin/profileManage.html';
    }else if (id == "deleteBt"){
        var truthBeTold = window.confirm("您确定要删除此任务吗？本次操作不可撤销。");
        if (truthBeTold) {
            $.post("/src/controllers/util/deleteStu.php",{"taskID":taskID},function (data) {
                console.log(data);
                if (data == 1){
                    alert("删除成功");
                    location.reload();
                }else {
                    alert("修改失败");
                }
            });
        }
    }
}

