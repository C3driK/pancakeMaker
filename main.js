const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("summaryText");
let totalPrice = 0;

const changeHandler = (event) => {
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log(basePrice);

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  console.log(toppingsTotal);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );
  console.log(extrasTotal);

  totalPrice = basePrice + extrasTotal + toppingsTotal;
  if (
    parseFloat(document.querySelector(".delivery:checked").dataset.price) === 5
  ) {
    totalPrice += 5;
  }

  totalPriceBanner.textContent = `${totalPrice}€`;
  totalPriceDisplay.textContent = `${totalPrice}€`;
};

const orderSummary = () => {
  let name = document.getElementById("customerName").value;
  let base = document.getElementById("type").selectedOptions[0].value;
  let toppings = [...document.querySelectorAll(".topping:checked")];
  let extras = [...document.querySelectorAll(".extra:checked")];
  let delivery = document.querySelector("input[name='delivery']:checked").value;

  //clean retrieved toppings and extras so they can be displayed as strings.
  let toppingsList = toppings.map((topping) => topping.name).join(", ");
  let extrasList = extras.map((extra) => extra.name).join(", ");

  let message = `Order by ${name}, Order includes ${base} pancake, Extras: ${extrasList}, Toppings: ${toppingsList}, Delivery Method: ${delivery}.`;
  summaryText.textContent = message;
};

const confirmBtn = document.getElementById("confirmOrder");

const confirmOrder = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const order = {
    id: Date.now(),
    customerName: document.getElementById("customerName").value,
    selectedPancake: document.getElementById("type").selectedOptions[0].value,
    toppings: [...document.querySelectorAll(".topping:checked")].map(
      (topping) => topping.name
    ),
    extras: [...document.querySelectorAll(".extra:checked")].map(
      (extra) => extra.name
    ),
    deliveryMethod: document.querySelector("input[name='delivery']:checked")
      .value,
    totalPrice: totalPrice,
    status: "waiting",
  };
  if (order.customerName === "") {
    alert("Please fill your name!");
  } else {
    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));
  }

  //clean form for next order
  document.getElementById("customerName").value = "";
};

pancakeForm.addEventListener("change", changeHandler);
seeOrderBtn.addEventListener("click", orderSummary);
confirmBtn.addEventListener("click", confirmOrder);
