const UI = {
    render(tasks) {
        const list = document.getElementById("taskList");
        list.innerHTML = "";

        if (tasks.length === 0) {
            list.innerHTML = `
                <li style="justify-content:center; opacity:0.6;">
                    📝 No tasks yet. Add your first task!
                </li>
            `;
            return;
        }

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
        li.className = task.priority.toLowerCase();

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
