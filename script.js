document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Array to hold tasks
  let tasks = [];

  // Load tasks from Local Storage
  function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks = JSON.parse(savedTasks); // Parse the saved tasks from JSON
      tasks.forEach((taskText) => {
        createTaskElement(taskText); // Create task elements in the DOM
      });
    }
  }

  // Function to create and append a task element to the DOM
  function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-btn");
    removeTask.textContent = "Remove";

    // Remove task when button is clicked
    removeTask.onclick = function () {
      removeTaskFromArray(taskText); // Remove task from the tasks array
      listItem.remove(); // Remove the task from the DOM
      updateLocalStorage(); // Update localStorage
    };

    listItem.appendChild(removeTask);
    taskList.appendChild(listItem);
  }

  // Remove task from the tasks array
  function removeTaskFromArray(taskText) {
    tasks = tasks.filter((task) => task !== taskText);
  }

  // Update localStorage with the latest tasks
  function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add new task
  let addTask = () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Enter a Task");
    } else {
      tasks.push(taskText); // Add the new task to the tasks array
      createTaskElement(taskText); // Create and append the new task element
      taskInput.value = ""; // Clear input field
      updateLocalStorage(); // Update localStorage with the new tasks array
    }
  };

  // Initial load of tasks from localStorage
  loadTasks();

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
