import { products, category, color } from "./data";
//Importamos la data del archivo data.js de esta manera. Se usan {} porque no estan exportadas por default, sino van sin llaves y separados

function renderColorFilter() {
  let html = "";
  for (let i = 0; i < color.length; i++) {
    html =
      html +
      `
    <li class="nav-main">
      <a href=""> ${color[i].color}</a>
        <ul class="nav-sub">
          <li>
            <a href="">sub1</a>
          </li>
        </ul>
    </li>
    
    
    `;
  }
  document.getElementById("color-js").innerHTML = html;
}

function renderBrowser() {
  let html = "";
  for (let i = 0; i < category.length; i++) {
    html =
      html +
      `
    <li class="nav-main">
      <a href=""> ${category[i].category}</a>
        <ul class="nav-sub">
          <li>
            <a href="">sub1</a>
          </li>
        </ul>
    </li>
    
    
    `;
  }
  document.getElementById("filter-js").innerHTML = html;
}

function renderProducts() {
  for (const productos of products) {
    let newCard = document.getElementById("cards-js");
    card = document.createElement("div");
    card.className = "cards";
    card.innerHTML += `
    <img class="img-container" src="${productos.img}"/>
    <div class="add" >
        <p class="name">${productos.name}</p> 
        <p id="price">$${productos.price}</p>
      <a class="button-add" id="button" onclick="addToCart(${productos.id});">Add to Cart</a>
    </div>`;

    newCard.appendChild(card);
  }
}

function renderCart() {
  let html = "";

  for (let i = 0; i < cart.length; i++) {
    html =
      html +
      `
      <div class="filter cart-heigth">
      <div class="add-child">
      <img class="img-cart" src="${cart[i].img}"/>
      <p class="style-cart">${cart[i].name}</p> 
      <p class="style-cart">${cart[i].cantidad}</p> 
      <a class="cart" id="remove" onclick="removeCart(${i});">X</a>
      <p id="price">$${cart[i].price}</p>
      </div>
      </div> 
      `;
  }

  document.getElementById("cart-js").innerHTML = html;
  localStorage.setItem("carrito", JSON.stringify(cart));
}

function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
  //Cuando usamos IDs para compararlos es mejor usar "===""
  //No lo cambio por si se rompe algo.
  cart.push(foundProduct);

  total();

  renderCart();
}

function removeCart(id) {
  cart.splice(id, 1);

  total();
  renderCart();
}

function total() {
  nCantidad = Object.values(cart).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );
  nPrecio = Object.values(cart).reduce(
    (acc, { cantidad, price }) => acc + cantidad * price,
    0
  );

  document.getElementById("cantidad-id").textContent = nCantidad;
  document.getElementById("total-id").textContent = nPrecio;

  renderCart();
}

function respaldoLocalStorage() {
  cart = JSON.parse(localStorage.getItem("carrito"));
}

let cart = [];

let articulosAcumulados = 0;

document.addEventListener("keyup", (event) => {
  //lo que llega es un evento, no un elemento iterable ;)
  if (event.target.matches("#buscador"))
    document.querySelectorAll(".cards").forEach((cards) => {
      cards.textContent.toLowerCase().includes(event.target.value.toLowerCase())
        ? cards.classList.remove("filtro")
        : cards.classList.add("filtro");
    });
});

renderProducts();
renderBrowser();
renderColorFilter();
respaldoLocalStorage();
renderCart();
total();
