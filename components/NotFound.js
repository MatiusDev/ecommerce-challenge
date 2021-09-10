const NotFound = () => {
  const $section = document.createElement('section');
  $section.innerHTML = `
    <h1>404</h1>
  `;
  return $section;
};

export default NotFound;