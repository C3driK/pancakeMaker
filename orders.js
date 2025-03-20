const ordersList = document.getElementById("ordersList");
const allOrders = JSON.parse(localStorage.getItem("orders"));
// const myOrders = [];

// if (allOrders === null) {
//   ordersList.textContent = "There are no orders right now, check back later!!";
// } else {
//   allOrders.map((order) => {
//     const orderBox = document.createElement("section");
//     ordersList.appendChild(orderBox);
//     let id = document.createElement("p");
//     let name = document.createElement("p");
//     let pancake = document.createElement("p");
//     let toppings = document.createElement("p");
//     let delivery = document.createElement("p");
//     let status = document.createElement("p");
//     let price = document.createElement("p");

//     id.textContent = `Id: ${order.id}`;
//     name.textContent = `Customer: ${order.customerName}`;
//     pancake.textContent = `Pancake Type: ${order.selectedPancake}`;
//     toppings.textContent = `Toppings and Extras: ${order.toppings}, ${order.extras}`;
//     delivery.textContent = `Delivery Method: ${order.deliveryMethod}`;
//     status.textContent = `Status: ${order.status}`;
//     price.textContent = `Price: ${order.totalPrice}€`;

//     orderBox.appendChild(id);
//     orderBox.appendChild(name);
//     orderBox.appendChild(pancake);
//     orderBox.appendChild(toppings);
//     orderBox.appendChild(delivery);
//     orderBox.appendChild(status);
//     orderBox.appendChild(price);
//   });
// }

// console.log(ordersList);

class Order {
  constructor(id, name, pancake, toppings, extras, delivery, status, price) {
    this.id = id;
    this.name = name;
    this.pancake = pancake;
    this.toppings = toppings;
    this.extras = extras;
    this.delivery = delivery;
    this.status = status;
    this.price = price;
  }
}
if (allOrders === null) {
  ordersList.textContent = "There are no orders right now, check back later!!";
} else {
  allOrders.map((order) => {
    const orderBox = document.createElement("section");
    let id = document.createElement("p");
    let name = document.createElement("p");
    let pancake = document.createElement("p");
    let toppings = document.createElement("p");
    let delivery = document.createElement("p");
    let status = document.createElement("p");
    let price = document.createElement("p");
    ordersList.appendChild(orderBox);
    orderBox.appendChild(id);
    orderBox.appendChild(name);
    orderBox.appendChild(pancake);
    orderBox.appendChild(toppings);
    orderBox.appendChild(delivery);
    orderBox.appendChild(status);
    orderBox.appendChild(price);

    // use template to create new order
    newOrder = new Order(
      order.id,
      order.customerName,
      order.selectedPancake,
      order.toppings,
      order.extras,
      order.deliveryMethod,
      order.status,
      order.totalPrice
    );
    console.log(newOrder);
    // create elements to dynamically display orders on orders page

    //plug the order contents
    id.textContent = `Id: ${newOrder.id}`;
    name.textContent = `Customer: ${newOrder.name}`;
    pancake.textContent = `Pancake Type: ${newOrder.pancake}`;
    toppings.textContent = `Toppings and Extras: ${newOrder.toppings}, ${newOrder.extras}`;
    delivery.textContent = `Delivery Method: ${newOrder.delivery}`;
    status.textContent = `Status: ${newOrder.status}`;
    price.textContent = `Price: ${newOrder.price}€`;

    // myOrders.push(newOrder);
  });
  // console.log(myOrders);
}
