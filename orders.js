const ordersList = document.getElementById("ordersList");
const orderDisplay = document.getElementById("ordersDisplay");

const statusColors = {
  waiting: "yellow",
  ready: "blue",
  delivered: "green",
};

function loadOrders() {
  const allOrders = JSON.parse(localStorage.getItem("orders")) || [];

  if (allOrders.length === 0) {
    ordersList.textContent =
      "There are no orders right now, check back later!!";
    return;
  }

  orderDisplay.innerHTML = "";

  allOrders.forEach((order, index) => {
    const orderContainer = document.createElement("div");
    orderContainer.classList.add("orderContainer");
    orderContainer.innerHTML = `
      <div class="order-header">
        <p><em>Order Id: ${order.id}</em></p>
        <div class="status-indicator" style="background-color: ${
          statusColors[order.status]
        }"></div>
      </div>
      <p>Customer Name: ${order.customerName}</p>
      <p>Pancake: ${order.selectedPancake}</p>
      <p>Toppings and Extras: ${order.toppings}, ${order.extras}</p>
      <p>Delivery Method: ${order.deliveryMethod}</p>
      
      <div class="status-container">
        <label for="orderStatus-${order.id}">Status:</label>
        <select id="orderStatus-${
          order.id
        }" data-order-index="${index}" class="order-status-select">
          <option value="waiting" ${
            order.status === "waiting" ? "selected" : ""
          }>Waiting</option>
          <option value="ready" ${
            order.status === "ready" ? "selected" : ""
          }>Ready</option>
          <option value="delivered" ${
            order.status === "delivered" ? "selected" : ""
          }>Delivered</option>
        </select>
        ${
          order.status === "delivered"
            ? `<button class="delete-order-btn" data-order-index="${index}">Delete Order</button>`
            : ""
        }
      </div>
      <p>Price: ${order.totalPrice}€</p>
    `;

    orderDisplay.appendChild(orderContainer);
  });
}

function setupOrderManagement() {
  orderDisplay.addEventListener("change", (event) => {
    if (event.target.classList.contains("order-status-select")) {
      const selectElement = event.target;
      const orderIndex = selectElement.getAttribute("data-order-index");
      const newStatus = selectElement.value;

      let allOrders = JSON.parse(localStorage.getItem("orders")) || [];

      allOrders[orderIndex].status = newStatus;

      localStorage.setItem("orders", JSON.stringify(allOrders));

      loadOrders();
    }
  });

  orderDisplay.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-order-btn")) {
      const orderIndex = event.target.getAttribute("data-order-index");

      let allOrders = JSON.parse(localStorage.getItem("orders")) || [];

      allOrders.splice(orderIndex, 1);

      localStorage.setItem("orders", JSON.stringify(allOrders));

      loadOrders();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadOrders();
  setupOrderManagement();
});
