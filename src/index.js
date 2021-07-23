document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // listen for submit
  //   squelch default
  //   take input and add it to My Todos
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let newTask = document.createElement('li');
    newTask.innerHTML = document.getElementById("new-task-description").value;
    let taskList = document.getElementById("tasks");
    taskList.appendChild(newTask);
    document.getElementById("new-task-description").value = ""
    }, false);
  

});