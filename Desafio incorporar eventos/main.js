class Producto {
  constructor(nombre, color, precio, id, img) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.precio = parseFloat(precio);
    this.img = img;
  }

  vender() {
    this.disponible = false;
  }
}

const item1 = new Producto("Zapatillas Nike", "Rojas", 6600, 0);
const item2 = new Producto("Zapatillas Nike", "Negras", 6500, 1);
const item3 = new Producto("Zapatillas Nike", "Azules", 6400, 2);
const item4 = new Producto("Zapatillas Adidas", "Rojas", 6500, 3);
const item5 = new Producto("Zapatillas Adidas", "Negras", 6600, 4);
const item6 = new Producto("Zapatillas Adidas", "Azules", 6400, 5);
const item7 = new Producto("Zapatillas Puma", "Rojas", 6600, 6);
const item8 = new Producto("Zapatillas Puma", "Negras", 6400, 7);
const item9 = new Producto("Zapatillas Puma", "Azules", 6500, 8);
const item10 = new Producto("Zapatillas Rebook", "Blancas", 13400, 9);

function renderProducts() {
  for (const productos of producto) {
    let newCard = document.getElementById("cards-js");
    card = document.createElement("div");
    card.className = "cards";
    card.innerHTML += `<div class="add " onclick="addToCart(${productos.id});">
    <p>${productos.nombre}</p> 
    <p>$${productos.precio}</p>
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
      <div class="cardsFromCart filter">
        <div class="cartSize cards">
          <span class="eliminateIcon" onclick="removeCart(${i});">❌</span>
          <p>${cart[i].nombre}</p> 
          <p>$${cart[i].precio}</p>
        </div>
      </div>
     
     
     `;
  }

  document.getElementById("cart-js").innerHTML = html;
}

function addToCart(id) {
  const foundProduct = producto.find((item) => item.id == id);
  cart.push(foundProduct);
  renderCart();
}

function removeCart(id) {
  cart.splice(id, 1);
  renderCart();
}

let cart = [];

let producto = [];
producto.push(
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10
);

document.addEventListener("keyup", (i) => {
  if (i.target.matches("#buscador"))
    document.querySelectorAll(".cards").forEach((cards) => {
      cards.textContent.toLowerCase().includes(i.target.value.toLowerCase())
        ? cards.classList.remove("filtro")
        : cards.classList.add("filtro");
    });
});

renderProducts();
