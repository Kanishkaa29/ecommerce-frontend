const products = [
    { id: 1, name: "Smartphone", price: 12000, image: "images/phone.jpg" },
    { id: 2, name: "Laptop", price: 55000, image: "images/laptop.jpg" },
    { id: 3, name: "Headphones", price: 2000, image: "images/headphones.jpg" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    productList.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join("");
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty</h3>";
        return;
    }

    cartItems.innerHTML = cart.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
        </div>
    `).join("");
}

displayProducts();
displayCart();
