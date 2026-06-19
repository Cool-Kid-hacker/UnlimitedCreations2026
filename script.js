document.addEventListener("DOMContentLoaded", () => {

const products = [
  { id: 1, name: "Cool Item 1", price: 10 },
  { id: 2, name: "Cool Item 2", price: 15 },
  { id: 3, name: "Cool Item 3", price: 20 }
];

let cart = [];

const box = document.getElementById("products");

function loadProducts() {
  box.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    box.appendChild(div);
  });
}

window.addToCart = function(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const box = document.getElementById("cart-items");
  box.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    box.appendChild(div);
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

window.submitOrder = function() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !address || cart.length === 0) {
    document.getElementById("message").innerText = "Fill everything!";
    return;
  }

  document.getElementById("message").innerText =
    "Order placed successfully!";

  cart = [];
  updateCart();
}

loadProducts();

});
