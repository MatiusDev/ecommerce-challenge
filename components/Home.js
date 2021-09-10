const Home = () => {
  const $section = document.createElement('section');
  $section.classList.add('home');
  $section.innerHTML = `
    <div class="home_welcome">
      <div class="home_welcome__title">
        <h1>Bienvenido a la Tienda</h1>
      </div>
      <img src="assets/images/welcome.jpg" alt="WelcomeImage" />
    </div>

    <div class="home_products">
      <div class="home_products__men">
        <a href="#/products/men">
          <img src="assets/images/men.jpg" alt="Hombres" />
        </a>
      </div>
      <div class="home_products__women">
        <a href="#/products/women">
          <img src="assets/images/women.jpg" alt="Mujeres" />
        </a>
      </div>
    </div>
  `;
  return $section;
};

export default Home;