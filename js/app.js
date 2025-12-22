let tasks = Storage.getTasks();
let currentFilter = "all";

function filteredTasks() {
    if (currentFilter === "active")
        return tasks.filter(t => !t.completed);
    if (currentFilter === "completed")
        return tasks.filter(t => t.completed);
    return tasks;
}

document.getElementById("taskForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("taskInput");

    tasks.push({ text: input.value, completed: false });
    Storage.saveTasks(tasks);
    input.value = "";
    UI.render(filteredTasks());
});

document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        UI.render(filteredTasks());
    });
});

UI.render(filteredTasks());
