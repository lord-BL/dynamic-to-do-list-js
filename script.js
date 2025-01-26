document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let addTask = () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter a Task");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      const removeTask = document.createElement("button");
      removeTask.classList.add("remove-btn");
      removeTask.textContent = "Remove";
      // Assuming the remove button has a class of 'remove-btn'
      removeTask.onclick = function () {
        listItem.remove(); // Removes the parent <li>
      };

      listItem.appendChild(removeTask);
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  };
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
