const block = document.querySelector('.reveal')

function isVisible(el) {
  const {top, bottom} = el.getBoundingClientRect()

  if (bottom < 0) {
    block.classList.remove('reveal_active')
    return false
  }
  if (top > window.innerHeight) {
    block.classList.remove('reveal_active')
    return false
  }
  block.classList.add('reveal_active')
  return true
}

setInterval(() => {
  isVisible(block)}, 1000)
