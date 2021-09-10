import products from "../helpers/product_data.js";

const Product = ({ gender } = { gender: '' }) => {
  const $fragment = document.createDocumentFragment();
  products
    .filter(product => product.gender.toUpperCase() === gender.toUpperCase() || gender === '')
    .forEach(product => {
      const $div = document.createElement('div');
      $div.classList.add('product');
      $div.innerHTML = `
        <a href="#/products/${product.gender.toLowerCase()}/${product.id}">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <div class="product_info">
          <h3>
            ${product.name}
          </h3>
          <p>
            $${product.price}
          </p>
        </div>
      `;
      $fragment.appendChild($div);
    });
  return $fragment;
};

export default Product;