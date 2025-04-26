document.addEventListener('DOMContentLoaded', function() {
    // Эмуляция базы данных (нужно будет заменить при сведении с бэком)
    const tasks = [
        {
            id: 1,
            title: "Разработать главную страницу",
            description: "Создать адаптивный дизайн для главной страницы приложения",
            author: "Иван Петров",
            createdAt: "2023-05-15"
        },
        {
            id: 2,
            title: "Реализовать аутентификацию",
            description: "Добавить систему входа/регистрации пользователей",
            author: "Алексей Сидоров",
            createdAt: "2023-05-16"
        },
        {
            id: 3,
            title: "Оптимизировать загрузку данных",
            description: "Улучшить производительность при загрузке больших объемов данных",
            author: "Мария Иванова",
            createdAt: "2023-05-17"
        }
    ];

    const tasksList = document.getElementById('tasks-list');

    // Функция для отображения задач
    function renderTasks() {
        tasksList.innerHTML = '';
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<p>Пока нет задач</p>';
            return;
        }

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-card';
            taskElement.innerHTML = `
                <div class="task-header">
                    <span class="task-title">${task.title}</span>
                    <span class="task-author">Автор: ${task.author}</span>
                </div>
                <div class="task-description">${task.description}</div>
                <div class="task-footer">
                    <small>Дата создания: ${task.createdAt}</small>
                </div>
            `;
            tasksList.appendChild(taskElement);
        });
    }

    renderTasks();
});
