const Payment = () => {
  const $section = document.createElement('section');
  $section.classList.add('payment');
  $section.innerHTML = `
    <div class="payment__container">
      <h1>Información de pago</h1>
      <form class="payment__form">
        <div class="payment__form-group">
          <input name="fullname" type="text" class="payment__form-input" placeholder="Nombre completo">
          <input name="email" type="text" class="payment__form-input" placeholder="Correo electrónico">
          <input name="card-number" type="text" class="payment__form-input" placeholder="Número de tarjeta">
          <div>
            <input name="card-expiration" type="text" class="payment__form-input" placeholder="MM/AA">
            <input name="card-cvv" type="text" class="payment__form-input" placeholder="CVV">
          </div>
        </div>
        <button type="submit class="payment__form-button">Pagar</button>
      </form>
    </div>
  `;
  const $formPayment = $section.querySelector('.payment__form');
  $formPayment.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const fullname = $formPayment.querySelector('[name="fullname"]').value;
    const email = $formPayment.querySelector('[name="email"]').value;
    const cardNumber = $formPayment.querySelector('[name="card-number"]').value;
    const cardExpiration = $formPayment.querySelector('[name="card-expiration"]').value;
    const cardCvv = $formPayment.querySelector('[name="card-cvv"]').value;

    if (!fullname || !email || !cardNumber || !cardExpiration || !cardCvv) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const payment = {
      fullname,
      email,
      cardNumber,
      cardExpiration,
      cardCvv,
    };
    localStorage.setItem('payment', JSON.stringify(payment));
    localStorage.removeItem('cart');
    history.pushState(null, null, '#/');
    history.go();
    alert('Gracias por tu compra');
  });
  return $section;
};

export default Payment;