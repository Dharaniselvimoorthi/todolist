function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let leftDiv = document.createElement("div");
    leftDiv.className = "task-left";

    let tick = document.createElement("div");
    tick.className = "tick";

    let span = document.createElement("span");
    span.textContent = taskText;

    // Toggle complete
    tick.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    leftDiv.appendChild(tick);
    leftDiv.appendChild(span);

    li.appendChild(leftDiv);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
