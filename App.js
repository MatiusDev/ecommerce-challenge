import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Router from './components/Router.js';

const App = () => {
  const $app = document.getElementById('app');
  const $fragment = document.createDocumentFragment();

  $app.innerHTML = '';
  $fragment.appendChild(Header());
  $fragment.appendChild(Router());
  $fragment.appendChild(Footer());
  $app.appendChild($fragment);

  console.log('rendering', location.hash);
};

export default App;