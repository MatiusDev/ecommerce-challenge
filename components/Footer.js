const Footer = () => {
  const year = new Date().getFullYear();

  const $footer = document.createElement('footer');
  $footer.innerHTML = `
    <p>
      Todos los derechos reservados © 
      <small>${year}</small>
    </p>
    <div class="footer_social">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  `;
  return $footer;
};

export default Footer;