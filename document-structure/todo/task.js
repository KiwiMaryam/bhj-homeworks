document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const tasksForm = document.getElementById('tasks__form');

    function createTask(title) {
        tasksList.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">${title}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);

        // Получаем только что добавленный элемент
        const removeButton = tasksList.querySelector('.task__remove');
        removeButton.addEventListener('click', function(event) {
            event.preventDefault();
            tasksList.removeChild(removeButton.parentElement);
        });
    }

    tasksForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            createTask(taskTitle);
            taskInput.value = '';
        }
    });
});
