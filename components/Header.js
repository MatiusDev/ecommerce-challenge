const Header = () => {
  const $header = document.createElement('header');
  const quantity = JSON.parse(localStorage.getItem('cart'))?.length || 0;
  $header.innerHTML = `
    <nav class="navbar">
      <div class="navbar_logo">
        <a href="#/"><img src="assets/images/logo.png"  alt="Logo" /></a>
      </div>
      <div class="navbar_menu">
        <a href="#/">Inicio</a>
        <a href="#/products">Productos</a>
      </div>
      <div class="navbar_cart">
        <a href="#/cart">
          <i class="fas fa-shopping-cart"></i>
          <span>(${quantity})</span>
        </a>
      </div>
    </nav>
  `;
  return $header;
};

export default Header;