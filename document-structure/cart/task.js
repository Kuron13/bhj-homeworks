const controls = Array.from(document.querySelectorAll('.product__quantity-control')); /* Найти все кнопки изменения количества */
const buttonsAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products'); /* Найти корзину*/

function changeValue(e) { /* Изменить количество товара в списке */
  product = e.target.closest('.product'); /* Активный продукт */
  const control_prod = product.querySelector('.product__quantity-value');
  let val = Number(control_prod.textContent); /* Найти количество */
  if (e.target.classList.contains('product__quantity-control_inc')) {  /* Если кнопка + */
    val = val + 1;
  }
  else {  /* Если кнопка - */
    if (val > 1) {  /* Если значение ещё можно уменьшить */
      val = val - 1;
    };
  }
 product.querySelector('.product__quantity-value').textContent = val;  /* Обновить значение */
}

function productAdd(e) { /* Добавить товар в корзину */
  product = e.target.closest('.product') /* Найти добавляемый товар */
  let action = 'new'; /* Действие по умолчанию - добавить новый товар */
  let change_prod = ''; /* Товар, который нужно изменить */
  let cart_prods = Array.from(cart.querySelectorAll('.cart__product')); /* Товары в корзине */
  cart_prods.forEach((c_prod) => {
    if (c_prod.getAttribute('data-id') == product.getAttribute('data-id')) { /* Если в корзине уже есть такой товар */
      action = 'change';
      change_prod = c_prod; /* Запомнить какой товар менять */
    };
  });

  if (action == 'new') { /* Добавить новый товар в корзину */
    const prod = document.createElement('div'); /* Создать контейнер продукта, добавить класс и атрибуты */
    prod.classList.add('cart__product');
    prod.setAttribute('data-id', product.getAttribute('data-id'));
    cart.appendChild(prod); /* Добавить элемент как дочерний корзине */
    prod.innerHTML = '<img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div>'; /* Отредактировать структуру продукта в корзине */
    prod.querySelector('.cart__product-image').src = product.querySelector('img').src;  /* Поменять картинку */
    product_quantity = product.querySelector('.product__quantity-value')
    prod.querySelector('.cart__product-count').textContent = Number(product_quantity.textContent); /* Поменять количество */
  }
  else { /* Изменить количество товара в корзине */
    console.log('Изменить в корзине')
    val_prod = Number(change_prod.querySelector('.cart__product-count').textContent) /* Изначальное кол-во */
    val_prod = val_prod + Number(product.querySelector('.product__quantity-value').textContent); /* Добавить ещё */
    change_prod.querySelector('.cart__product-count').textContent = val_prod; /* Поменять количество */
  };
}

controls.forEach((control) => {
  control.addEventListener('click', changeValue);/* Добавить обработчик изменения количества */
});

buttonsAdd.forEach((buttonAdd) => {
  buttonAdd.addEventListener('click', productAdd);/* Добавить обработчик добавления в корзину */
});
