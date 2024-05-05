document.getElementById('reset-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');

    document.getElementById('cart-items').innerHTML = '<p class="cartreset">Your cart has been reset.</p>';
    document.getElementById('subtotal-container').innerHTML = '<p>Subtotal: 0 LKR</p>';

    let formattedSubtotal = new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 2
    }).format(0);

    document.getElementById('subtotal-container').innerHTML = `
  <div class="subtotal-info">
    <p>Subtotal: ${formattedSubtotal}</p>
  </div>
`;
});