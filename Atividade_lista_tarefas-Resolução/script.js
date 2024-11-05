const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskDescription = document.createElement('p');
        taskDescription.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => taskList.removeChild(taskDiv);

        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(removeBtn);

        taskList.appendChild(taskDiv);

        taskInput.value = '';
    }
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
