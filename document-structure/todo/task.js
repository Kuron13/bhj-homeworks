const input = document.querySelector('.tasks__input'); /* Найти элемент ввода */
const button = document.querySelector('.tasks__add'); /* Найти кнопку добавления */
const tasksList = document.querySelector('.tasks__list'); /* Найти контейнер для списка задач */

button.type = 'button'; /* Запретить обновление страницы */

function addTask() { /* Обработчик для создания новой задачи */
  if (input.value != '') { /* Если поле ввода пустое, то не добавлять задачу */
    const task = document.createElement('div'); /* Создать контейнер задачи с нужным тегом и классом */
    task.classList.add('task');
    tasksList.appendChild(task); /* Добавить контейнер задачи в список задач */
    task.innerHTML = '<div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a>'; /* Отредактировать структуру задачи */
    task.querySelector('.task__title').textContent = input.value; /* Поменять название задачи */
    task.querySelector('.task__remove').addEventListener('click', removeTask); /* Добавить кнопке удаления обработчик удаления */
  }
  else {
    console.log('Поле пустое');
  }
}

function removeTask(e) { /* Обработчик для удаления задачи */
  const task = e.target.closest('.task');/* Найти задачу, которую нужно удалить */
  task.remove(); /* Удалить задачу */
}

button.addEventListener('click', addTask);/* Добавить обработчик создания задачи для кнопки "Добавить" */

input.addEventListener('keyup', (e) => { /* Добавить обработчик создания задачи для поля ввода */
  if (e.key == 'Enter') {
    console.log('Нажата кнопка Enter');
    addTask();
  }
})
