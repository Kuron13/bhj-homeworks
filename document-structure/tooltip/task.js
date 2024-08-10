const tooltipElements = Array.from(document.querySelectorAll('.has-tooltip')); /* Найти все эелементы, которым требуется подсказка */

const tooltip = document.createElement('div'); /* Создать подсказку с нужным тегом и классом */
tooltip.classList.add('tooltip');

tooltipElements.forEach((el) => {
  el.onclick = () => {  /* Добавить обработчик кликов */

    tooltip.classList.remove('tooltip_active'); /* Скрыть предыдущую подсказку */

    el.appendChild(tooltip);  /* Сделать подсказку дочерней к активному элементу */

    let posEl = el.getBoundingClientRect(); /* Получить координаты родителя */

    tooltip.style.left = posEl.left + document.body.scrollLeft + "px";  /* Изменить координаты подсказки в ссоответствии с родительскими */
    tooltip.style.top = posEl.top + document.body.scrollTop + 20 + "px";
    tooltip.style.width = el.offsetWidth + "px";
    tooltip.style.height = el.offsetHeight + "px";

    tooltip.textContent = el.title;  /* Обновить текст подсказки */
    tooltip.classList.add('tooltip_active');  /* Активировать подсказку */

    return false;  /* Запретить обновление страницы */
  }
})
