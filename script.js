let products = [
  { id: 1, name: "Custom Item 1", price: 10 },
  { id: 2, name: "Custom Item 2", price: 15 },
  { id: 3, name: "Custom Item 3", price: 20 }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    container.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: $" + total;
}

function submitOrder() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;

  if (!name || !address || cart.length === 0) {
    document.getElementById("message").innerText = "Fill everything!";
    return;
  }

  let order = {
    name,
    address,
    email,
    items: cart,
    total: cart.reduce((sum, i) => sum + i.price, 0)
  };

  console.log("ORDER:", order);

  document.getElementById("message").innerText =
    "Order placed! (Next step: connect Google Sheets or Stripe)";

  cart = [];
  updateCart();
}

displayProducts();
