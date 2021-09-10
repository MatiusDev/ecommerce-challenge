import products from "../helpers/product_data.js";
import { getHash } from "../helpers/utils.js";

const ProductDetail = () => {
  const $section = document.createElement('section');
  $section.classList.add('product_detail');
  const hash = getHash();
  const id = hash[3];
  const product = products.find(product => product.id === id);
  
  if (!product) {
    history.pushState(null, '404', '#/notFound');
    history.go();
    return document.createDocumentFragment();
  }
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(item => item.id === id);
  product.stock -= item ? item.quantity : 0;
  const { name, description, image, price, stock, gender } = product;

  $section.innerHTML = `
    <div class="product_detail__group">
      <div class="product_detail__image">
        <img src="${image}" alt="${name}">
      </div>
      <div class="product_detail__info">
        <div class="product_detail__title">
          <h1>${name}</h1>
          <h2>$ ${price}</h2>
        </div>
        <div class="product_detail__description">
          <p>${description}</p>
        </div>
        <div class="product_detail__menu">
          <input type="number" value="1" min="1" max="${stock}">
          <button class="product_detail__menu__button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;
  const $btnAddToCart = $section.querySelector('.product_detail__menu__button');
  $btnAddToCart.addEventListener('click', () => {
    if (product.stock > 0) {
      const quantity = $section.querySelector('input').value;
      const item = {
        id,
        name,
        price,
        quantity: parseInt(quantity),
        gender,
        image,
        stock
      };

      const index = cart.findIndex(item => item.id === id);
      if (index !== -1) {
        cart[index].quantity += parseInt(quantity);
        alert(`Producto agregado al carrito! \nUnidades: ${cart[index].quantity}`);
      } else {
        cart.push(item);
        alert('Producto agregado al carrito!');
      }
      product.stock -= quantity;
      console.log(product.stock);
      localStorage.setItem('cart', JSON.stringify(cart));
      history.pushState(null, '', `#/products`);
      history.go();
    } else {
      alert('No hay stock suficiente');
    }
  });
  return $section;
};

export default ProductDetail;