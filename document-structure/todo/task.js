document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const tasksForm = document.getElementById('tasks__form');

    function createTask(title) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = title;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('task__remove');
        removeButton.innerHTML = '&times;';

        removeButton.addEventListener('click', function(event) {
            event.preventDefault();
            tasksList.removeChild(taskElement);
        });

        taskElement.appendChild(taskTitle);
        taskElement.appendChild(removeButton);
        tasksList.appendChild(taskElement);
    }

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            createTask(taskTitle);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const taskTitle = taskInput.value.trim();
            if (taskTitle) {
                createTask(taskTitle);
                taskInput.value = '';
            }
        }
    });
});
