// Sample tasks array for demonstration
const tasks = [
    { name: "Finish homework" },
    { name: "Take a break" },
    { name: "Read a chapter" },
    { name: "Clean your desk" },
    { name: "Practice coding" },
    { name: "Organize files" }
  ];
  
  // Function to show the modal with 3 random tasks
  function showTaskModal(tasks) {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = ""; // Clear existing tasks in the modal
  
    // Pick 3 random tasks
    const randomTasks = tasks.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    randomTasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task.name;
  
      // Create an "Accept" button for each task
      const acceptButton = document.createElement("button");
      acceptButton.textContent = "Accept";
      acceptButton.onclick = () => {
        // Logic to handle task acceptance (will be implemented later)
        console.log(`Task "${task.name}" accepted.`);
        listItem.remove(); // Remove the task from the modal display
        snoozeTasks(); // Close the modal
      };
  
      listItem.appendChild(acceptButton);
      taskListElement.appendChild(listItem);
    });
  
    // Display the modal
    document.getElementById("taskModal").style.display = "flex";
  }
  
  // Function to close the modal (for Snooze)
  function snoozeTasks() {
    console.log("Tasks snoozed.");
    document.getElementById("taskModal").style.display = "none";
  }
  