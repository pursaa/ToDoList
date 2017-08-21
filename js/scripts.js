// Business Logic

// UI Logic
$(document).ready(function() {
  $("form#ToDo").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    $("ul#ToDoList").append("<li><input type='checkbox' name='task-complete' value='" + task + "'> " + task + "</li>");
    $("input#task").val("");
  });
});
