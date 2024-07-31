const blocks = Array.from(document.querySelectorAll('.reveal'))

function isVisible(el) {
  const {top, bottom} = el.getBoundingClientRect()

  if (bottom < 0) {
    el.classList.remove('reveal_active')
    return false
  }
  if (top > window.innerHeight) {
    el.classList.remove('reveal_active')
    return false
  }
  el.classList.add('reveal_active')
  return true
}

setInterval(() => {
  blocks.forEach((block) => {
    isVisible(block)})}, 1000);
