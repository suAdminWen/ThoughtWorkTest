$("#addArea").button().click(function(){
    $( "#dialog-modal" ).dialog({
        resizable: false,
        modal: true,
        buttons: {
          "提交": function() {
            $( this ).dialog( "close" );
            addArea();
          },
          "关闭": function() {
            $( this ).dialog( "close" );
          }
        }
    });
    $("#selectable").css("display", "block");
    $( "#selectable" ).selectable();
})


$("#preview").button().click(function(){
    if(this.value == "预览"){
        this.value = "编辑";
        $("#addArea").css("display", "none");
        $(".op").css("display", "none");
        return ;
    }
    if(this.value == "编辑"){
        this.value = "预览";
        $("#addArea").css("display", "inline-block");
        $(".op").css("display", "table-cell");
        return;
    }
});


$("body").on("click", ".delete", function(){
    $(this).parents("tr").remove()
})


function addArea(){
    if($(".ui-selected").attr("id") == "addText"){
        $("#form").append('<tr><td>文本</td><td><input type="text" name="text"/></td><td class="op"> <a class="delete">删除</a></td>');
    }
    if($(".ui-selected").attr("id") == "addDate"){
        $("#form").append('<tr><td>日期</td><td><input type="text" class="datepicker"/></td><td class="op"><a class="delete">删除</a></td>');
        $( ".datepicker" ).datepicker();
    }
}
