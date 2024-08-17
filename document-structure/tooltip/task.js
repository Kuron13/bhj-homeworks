const tooltipElements = Array.from(document.querySelectorAll('.has-tooltip'));

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

tooltipElements.forEach((el) => {
  el.onclick = () => {

    if (tooltip.textContent == el.title) {
        tooltip.classList.toggle('tooltip_active');
        return false;
    }

    tooltip.textContent = el.title;
    el.after(tooltip);

    let posEl = el.getBoundingClientRect();
    tooltip.style.left = posEl.left + document.body.scrollLeft + "px";
    tooltip.style.top = posEl.top + document.body.scrollTop + 20 + "px";

    tooltip.classList.add('tooltip_active');

    return false;
  }
})
