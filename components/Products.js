import Product from "./Product.js";
import { getHash } from "../helpers/utils.js";

const Products = () => {
  const $section = document.createElement('section');
  $section.classList.add('products');
  $section.innerHTML = `
    <div class="products_container">
      <div class="products_menu">
        <ul>
          <li id="all_option" class="products_menu_item">
            Todos
          </li>
          <li id="men_option" class="products_menu_item">
            Hombres
          </li>
          <li id="women_option" class="products_menu_item">
            Mujeres
          </li>
        </ul>
      </div>
      <div class="products_list"></div>
    </div>
  `;
  
  const $productsList = $section.querySelector('.products_list');
  const $btnAll = $section.querySelector('#all_option');
  const $btnMen = $section.querySelector('#men_option');
  const $btnWomen = $section.querySelector('#women_option');
  $btnAll.onclick = handleClick;
  $btnMen.onclick = handleClick;
  $btnWomen.onclick = handleClick;
  const hash = getHash();
  getInitialProducts(hash[2]);

  window.addEventListener('hashchange' , () => {
    const hash = getHash();
    if (hash[1] === 'products' && hash.length <= 3) {
      getInitialProducts(hash[2]);
    }
  });

  function getInitialProducts(hash) {
    const currentActive = $section.querySelector('li.products_menu_item.active');
    $productsList.innerHTML = '';
    currentActive?.classList.remove('active');
    if (hash === 'men') {
      $btnMen.classList.add('active');
      $productsList.appendChild(Product({ gender: hash }));
      history.pushState('', 'done', '#/products/men');
    } else if (hash === 'women') {
      $btnWomen.classList.add('active');
      $productsList.appendChild(Product({ gender: hash }));
      history.pushState('', 'done', '#/products/women');
    } else {
      $btnAll.classList.add('active');
      $productsList.appendChild(Product());
      history.pushState('', 'done', `#/products`);
    }
  }

  function handleClick(evt) {
    const { target } = evt;
    const currentActive = $section.querySelector('li.products_menu_item.active');
    if (target !== currentActive) {
      const hash = target.id.replace('_option', '');
      getInitialProducts(hash);
    }
  }

  return $section;
};

export default Products;