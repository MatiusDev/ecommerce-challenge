export const getHash = () => {
  const { hash } = location;
  return hash.split('/');
};

export const onQuantityChange = (e, id) => {
  const { value } = e.target;
  const cart = JSON.parse(localStorage.getItem('cart'));
  if (cart) {
    const item = cart.find(item => item.id === id);
    if (item) {
      if (value > 0) {
        item.quantity = value;
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        cart.splice(cart.indexOf(item), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }
}