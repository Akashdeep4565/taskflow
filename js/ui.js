const UI = {
    render(tasks) {
        const list = document.getElementById("taskList");
        list.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");

           li.innerHTML = `
    <span class="${task.completed ? 'completed' : ''}">
        ${task.text}
        <small class="priority ${task.priority.toLowerCase()}">
            (${task.priority})
        </small>
         ${task.dueDate ? `<br><small>📅 ${task.dueDate}</small>` : ""}
    </span>
    <div>
        <button onclick="UI.toggle(${index})">✔</button>
        <button onclick="UI.remove(${index})">✖</button>
    </div>
`;

            list.appendChild(li);
        });
    },

    toggle(index) {
        tasks[index].completed = !tasks[index].completed;
        Storage.saveTasks(tasks);
        this.render(filteredTasks());
    },

    remove(index) {
        tasks.splice(index, 1);
        Storage.saveTasks(tasks);
        this.render(filteredTasks());
    }
};
