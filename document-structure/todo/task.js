const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

function addTask(e) {
  if (input.value.trim() != '') {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
    tasksList.appendChild(task);
    task.querySelector('.task__remove').addEventListener('click', removeTask);
  }
  input.value = '';
  e.preventDefault();
}

function removeTask(e) {
  const task = e.target.closest('.task');
  task.remove();
  e.preventDefault();
}

button.addEventListener('click', addTask);
