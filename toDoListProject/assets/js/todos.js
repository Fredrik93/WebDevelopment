//check specific todos by clicking

$("ul").on("click", "li", function(){
    
    $(this).toggleClass("completed")
});

//click on x to delete todo 
$("ul").on("click","span", function (event) 
{
    
    $(this).parent().fadeOut(500,function(){   
        $(this).remove();  
    });
    //if the event is "bubbling", if its nested this will stop it from doing other things it shouldnt 
    event.stopPropagation();
});

$("input").keypress(function (event) { 
if (event.which === 13) {

  var todoText = $(this).val();
$(this).val("");
  $("ul").append("<li> <span> <i class='fas fa-trash'></i> </span> " + todoText + "</li>")
}
});

$(".fa-plus").click(function (param) {  param
$("input[type='text']").fadeToggle();
});