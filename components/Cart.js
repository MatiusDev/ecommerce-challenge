import CartItem from "./CartItem.js";

const Cart = () => {
  const $section = document.createElement('section');
  $section.classList.add('cart');

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  $section.innerHTML = `
    <div class="cart__container">
      <div class="cart__items"></div>
      <div class="cart__menu">
        <div class="cart__menu_options">
          <h1>Total: <span id="cart__total"></span></h1>
          <button class="cart__menu_button">Pagar</button>
        </div>
      </div>
    </div>
  `;

  const $cartItems = $section.querySelector('.cart__items');
  if (cart.length > 0) {
    const $cartMenu = $section.querySelector('.cart__menu');
    const $total = $section.querySelector('#cart__total');
    const $pay = $section.querySelector('.cart__menu_button');
    const $fragment = document.createDocumentFragment();
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
      $fragment.appendChild(CartItem({ ...item }));
    });
    $total.textContent = `$${total}`;
    $cartMenu.style.display = 'flex';
    $cartItems.appendChild($fragment);

    $pay.addEventListener('click', () => {
      history.pushState(null, null, '#/payment');
      history.go();
    });
  } else {
    const $div = document.createElement('div');
    $div.innerHTML = `
      <div class="cart__empty">
        <h1>¡Tu carrito está vacío!</h1>
        <button class="cart__empty_button">Ir al catálogo</button>
      </div>
    `;
    $div.querySelector('.cart__empty_button').addEventListener('click', () => {
      history.pushState(null, null, '#/products');
      history.go();
    });

    $cartItems.appendChild($div);
  }
  return $section;
};

export default Cart;