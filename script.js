function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + " <span class='delete' onclick='removeTask(this)'>X</span>";

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}