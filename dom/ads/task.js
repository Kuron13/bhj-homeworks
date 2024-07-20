const rotator = document.querySelector('.rotator')

function rotatorChange(rotator) {
  let rotatorActive = rotator.querySelector('.rotator__case_active')
  console.log('Активно = ', rotatorActive)
  if (rotatorActive == rotator.lastElementChild) {
    rotatorActive.classList.remove('rotator__case_active')
    rotatorActive = rotator.firstElementChild
    rotatorActive.classList.add('rotator__case_active')
  } else {
    rotatorActive.classList.remove('rotator__case_active')
    rotatorActive = rotatorActive.nextElementSibling
    rotatorActive.classList.add('rotator__case_active')
  }
  console.log('Новый актив = ', rotatorActive)
}

setInterval(() => {
  rotatorChange(rotator)
}, 1000)
