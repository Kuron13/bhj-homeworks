const controls = Array.from(document.querySelectorAll('.product__quantity-control'));
const buttonsAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');

function changeValue(e) {
  product = e.target.closest('.product');
  const controlProd = product.querySelector('.product__quantity-value');
  let val = Number(controlProd.textContent);
  if (e.target.classList.contains('product__quantity-control_inc')) {
    val = val + 1;
  } else if (val > 1) {
    val = val - 1;
  };
  controlProd.textContent = val;
}

function productAdd(e) {
  product = e.target.closest('.product')
  let productID = product.getAttribute('data-id')
  let cartProducts = Array.from(cart.querySelectorAll('.cart__product'));

  const productInCart = cartProducts.find((prod) => prod.getAttribute('data-id') == productID);
  if (productInCart) {
    productVal = Number(productInCart.querySelector('.cart__product-count').textContent)
    productVal = productVal + Number(product.querySelector('.product__quantity-value').textContent);
    productInCart.querySelector('.cart__product-count').textContent = productVal;
  } else {
    cart.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id=${productID}>
      <img class="cart__product-image" src=${product.querySelector('img').src}>
      <div class="cart__product-count">${Number(product.querySelector('.product__quantity-value').textContent)}</div>
    </div>`)
  }
}

controls.forEach((control) => {
  control.addEventListener('click', changeValue);
});

buttonsAdd.forEach((buttonAdd) => {
  buttonAdd.addEventListener('click', productAdd);
});
