const buttons = document.querySelectorAll('.font-size')
const book = document.querySelector('.book')

buttons.forEach((button) => {
  button.onclick = () => {

    buttons.forEach((button2) => {
      button2.classList.remove('font-size_active')
    })
    button.classList.add('font-size_active')

    if (button.classList.contains('font-size_small')) {
      book.classList.add('book_fs-small')
      if (book.classList.contains('book_fs-big')) {
        book.classList.remove('book_fs-big')
      }
    } else if (button.classList.contains('font-size_big')) {
      book.classList.add('book_fs-big')
      if (book.classList.contains('book_fs-small')) {
        book.classList.remove('book_fs-small')
      }
    } else {
      book.classList.remove('book_fs-big')
      book.classList.remove('book_fs-small')
    }
    return false;
  };
})
