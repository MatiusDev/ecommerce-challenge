import { onQuantityChange } from "../helpers/utils.js";

const CartItem = (props) => {
  const { id, name, price, quantity, image, gender, stock } = props;
  const $div = document.createElement('div');
  $div.classList.add('cart__item');
  $div.innerHTML = `
    <div class="cart__item_field">
      <h2>${name}</h2>
      <a href="#/products/${gender}/${id}">
        <img src="${image}" alt="${name}">
      </a>
    </div>
    <div class="cart__item_field">
      <h2>Cantidad</h2>
      <div class="cart__item_input">
        <input id="cart__item_quantity" type="number" min="1" max="${stock}" value="${quantity}">
      </div>
    </div>
    <div class="cart__item_field">
      <h2>Precio</h2>
      <p>$${price}</p>
    </div>
    <div class="cart__item_field">
      <h2>Subtotal</h2>
      <p>$${price*quantity}</p>
    </div>
  `;
  const $quantity = $div.querySelector('#cart__item_quantity');
  $quantity.addEventListener('change', (e) => {
    onQuantityChange(e, id);
    location.reload();
  });

  return $div;
};

export default CartItem;