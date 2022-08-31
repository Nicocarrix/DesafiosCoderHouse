const products = [
  {
    id: 0,
    name: 'BOTAS NIKE COURT VISION MID NBA ROJA',
    color: 'roja',
    price: 23.099,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botas-nike-court-vision-mid-nba-roja-510010dm1186600-1.jpg',
  },
  {
    id: 1,
    name: 'ZAPATILLAS NIKE SB BLZR COURT NEGRA',
    color: 'negra',
    price: 17.619,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-nike-sb-blzr-court-negra-1-510010cv1658002-1.jpg',
  },
  {
    id: 2,
    name: 'ZAPATILLAS RUNNING NIKE AIR ZOOM AZUL',
    color: 'azul',
    price: 36.299,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatilla-running-nike-air-zoom-pegasus-37-azul-510010bq9646400-1.jpg',
  },
  {
    id: 3,
    name: 'ZAPATILLA ADIDAS COURT 80S ROJA',
    color: 'roja',
    price: 14.399,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/1/0/100010ee9674001-1.jpg',
  },
  {
    id: 4,
    name: 'ZAPATILLAS ADIDAS RUN 70S NEGRA',
    color: 'negra',
    price: 20.999,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-adidas-run-70s-negra-100010gx3090001-1.jpg',
  },
  {
    id: 5,
    name: 'ZAPATILLAS ADIDAS RUN 70S AZUL',
    color: 'azul',
    price: 20.999,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-adidas-run-70s-azul-100010gx3091001-1.jpg',
  },
  {
    id: 6,
    name: 'ZAPATILLAS PUMA SCUDERIA  MIRAGE ROJA',
    color: 'roja',
    price: 21.449,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-puma-scuderia-ferrari-mirage-mox-roja-640010306769002-1.jpg',
  },
  {
    id: 7,
    name: 'ZAPATILLAS RUNNING PUMA FLYER FLEX NEGRA',
    color: 'negra',
    price: 12.999,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-puma-flyer-flex-negra-28299952-640010376491005-1.jpg',
  },
  {
    id: 8,
    name: 'ZAPATILLAS RUNNING PUMA FLYER FLEX AZUL',
    color: 'azul',
    price: 12.999,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-puma-flyer-flex-azul---640010376491006-1.jpg',
  },
  {
    id: 9,
    name: 'ZAPATILLAS REEBOK CLASSIC BLANCA',
    color: 'blanca',
    price: 26.099,
    cantidad: 1,
    img: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-reebok-classic-leather-blanca-46966745-111010gy0952001-1.jpg',
  },
];

const category = [
  {
    category: 'Hombre',
  },

  {
    category: 'Mujer',
  },

  {
    category: 'Deporte',
  },

  {
    category: 'Casual',
  },

  {
    category: 'Botas',
  },
];

const color = [
  {
    color: 'Azul',
  },
  {
    color: 'Negro',
  },
  {
    color: 'Blanco',
  },
  {
    color: 'Rojo',
  },
];

function renderColorFilter() {
  let html = '';
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
  document.getElementById('color-js').innerHTML = html;
}

function renderBrowser() {
  let html = '';
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
  document.getElementById('filter-js').innerHTML = html;
}

function renderProducts() {
  for (const productos of products) {
    let newCard = document.getElementById('cards-js');
    card = document.createElement('div');
    card.className = 'cards';
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
  let html = '';

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

  document.getElementById('cart-js').innerHTML = html;
  localStorage.setItem('carrito', JSON.stringify(cart));
}

function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
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
  nCantidad = Object.values(cart).reduce((acc, { cantidad }) => acc + cantidad, 0);
  nPrecio = Object.values(cart).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0);

  document.getElementById('cantidad-id').textContent = nCantidad;
  document.getElementById('total-id').textContent = nPrecio;

  renderCart();
}

function respaldoLocalStorage() {
  cart = JSON.parse(localStorage.getItem('carrito'));
}

let cart = [];

let articulosAcumulados = 0;

document.addEventListener('keyup', (i) => {
  if (i.target.matches('#buscador'))
    document.querySelectorAll('.cards').forEach((cards) => {
      cards.textContent.toLowerCase().includes(i.target.value.toLowerCase()) ? cards.classList.remove('filtro') : cards.classList.add('filtro');
    });
});

renderProducts();
renderBrowser();
renderColorFilter();
respaldoLocalStorage();
renderCart();
total();
