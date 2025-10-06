document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Input is empty!");
            return;
        }

        // Create new li element
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when button is clicked
        removeBtn.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append remove button to li
        listItem.appendChild(removeBtn);

        // Append li to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener for click on Add button
    addButton.addEventListener("click", addTask);

    // Add event listener for Enter key in input
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

