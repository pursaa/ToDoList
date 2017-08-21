// Business Logic

// UI Logic
$(document).ready(function() {
  $("form#ToDo").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    $("ul#ToDoList").append("<li><input type='checkbox' name='task-complete' value='" + task + "'> " + task + "</li>");
    $("input#task").val("");

    $("input:checkbox[name=task-complete]").last().change(function() {
      if ($(this).parent().hasClass("completed")) {
        $(this).parent().removeClass("completed");
      } else {
        $(this).parent().addClass("completed");
        if ($("li").not(".completed").length === 0) {
          $(".list").empty();
        }
      }
    });
  });
});
