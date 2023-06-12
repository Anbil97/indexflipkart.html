const sellerId = '<your_seller_id>';
const apiKey = '<your_api_key>';
const apiBaseUrl = 'https://api.flipkart.net/sellers/v2/';

function getOrderDetails() {
  const orderId = '<desired_order_id>';
  const url = `${apiBaseUrl}sellers/${sellerId}/orders/${orderId}`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
      displayOrderDetails(data);
    })
    .catch(error => {
      console.error('Error retrieving order details:', error);
    });
}

function displayOrderDetails(order) {
  const orderDetailsContainer = document.getElementById('order-details');
  orderDetailsContainer.innerHTML = '';

  const orderCard = createOrderCard(order);
  orderDetailsContainer.appendChild(orderCard);
}

function createOrderCard(order) {
  const card = document.createElement('div');
  card.classList.add('card', 'mb-3');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const orderId = document.createElement('h5');
  orderId.classList.add('card-title');
  orderId.textContent = `Order ID: ${order.orderId}`;

  const orderDate = document.createElement('p');
  orderDate.classList.add('card-text');
  orderDate.textContent = `Order Date: ${order.orderDate}`;

  const orderStatus = document.createElement('p');
  orderStatus.classList.add('card-text');
  orderStatus.textContent = `Status: ${order.status}`;

  cardBody.appendChild(orderId);
  cardBody.appendChild(orderDate);
  cardBody.appendChild(orderStatus);
  card.appendChild(cardBody);

  return card;
}
