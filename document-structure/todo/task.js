const input = document.querySelector('.tasks__input');
const button = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

button.type = 'button';

function addTask() {
  if (input.value.trim() != '') {
    tasksList.innerHTML = `<div class='task'><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`
    tasksList.querySelector('.task__remove').addEventListener('click', removeTask);
  }
  input.value = '';
}

function removeTask(e) {
  const task = e.target.closest('.task');
  task.remove();
}

button.addEventListener('click', addTask);
