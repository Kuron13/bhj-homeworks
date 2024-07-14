const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab) => {
  tab.onclick = () => {

    tabs.forEach((tab2) => {
      tab2.classList.remove('tab_active');
    })

    tab.classList.add('tab_active');

    contents.forEach((content) => {
      content.classList.remove('tab__content_active');
    })
    index = tabs.indexOf(tab)
    contents[index].classList.add('tab__content_active');
  }
})