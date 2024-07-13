function menuActive() {
  document.querySelector('.dropdown__list').classList.add('dropdown__list_active')
}

function menuDeactive() {
  document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
}

const dropArea = document.querySelector('.dropdown__value');
dropArea.addEventListener('click', menuActive);

const dropItems = document.querySelectorAll('.dropdown__item');
dropItems.forEach((dropItem) => {
  dropItem.addEventListener('click', menuDeactive);
})

const items = Array.from(document.querySelectorAll('.dropdown__item'))
items.forEach((item) => {
  item.onclick = () => {
    document.querySelector('.dropdown__value').textContent = item.textContent
    return false;
  };
})