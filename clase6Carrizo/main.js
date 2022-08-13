function saludarUser() {
  alert("Binvenido a ShoeSport");
}

function eleccionDeCalzado(calzado) {
  calzado = prompt(`Seleccione su calzado a comprar:
  1. Deporte
  2. Casual

  0. Salir`);

  while (calzado !== "0") {
    switch (calzado) {
      case "1":
        calzadoDeporte();

        break;
      case "2":
        calzadoCasual();
        break;

      default:
        alert(`Porfavor seleccione una opcion.`);
        break;
    }

    calzado = prompt(`Seleccione su calzado a comprar:
  1. Deporte
  2. Casual

  0. Salir
  
  Saldo actual: $${articulosAcumulados}`);
  }

  alert(`El monto total es: $${articulosAcumulados} con IVA incluido`);

  if (articulosAcumulados == 0) {
    alert(`Gracias por su visita, vuelva pronto`);
  } else if (articulosAcumulados > 0) {
    alert(`Compra realizada con exito.`);
  }
}

function calzadoDeporte() {
  alert(`Seleccione su calzado`);
  let seleccionDeporte = prompt(`Elija su calzado:

  ${item1.id}. ${item1.nombre} ${item1.marca} ${item1.color} - ${item1.precio}
  ${item2.id}. ${item2.nombre} ${item2.marca} ${item2.color} - ${item2.precio}
  ${item3.id}. ${item3.nombre} ${item3.marca} ${item3.color} - ${item3.precio}

  0. Salir`);

  while (seleccionDeporte !== "0") {
    switch (seleccionDeporte) {
      case "1":
        articulosAcumulados += articulosAcumulados + item1.precio;
        alert(
          `${item1.nombre} ${item1.marca} ${item1.color} Agregado al carrito`
        );

        break;
      case "2":
        articulosAcumulados += articulosAcumulados + item2.precio;
        alert(
          `${item2.nombre} ${item2.marca} ${item2.color} Agregado al carrito.`
        );
        break;
      case "3":
        articulosAcumulados += articulosAcumulados + item3.precio;
        alert(
          `${item3.nombre} ${item3.marca} ${item3.color} Agregado al carrito.`
        );
        break;

      default:
        alert(`Porfavor seleccione una opcion.`);
        break;
    }

    seleccionDeporte = prompt(`Elija su calzado:

    ${item1.id}. ${item1.nombre} ${item1.marca} ${item1.color} - ${item1.precio} 
    ${item2.id}. ${item2.nombre} ${item2.marca} ${item2.color} - ${item2.precio}
    ${item3.id}. ${item3.nombre} ${item3.marca} ${item3.color} - ${item3.precio}
  
    0. Salir
    
    Subtolal: $${articulosAcumulados}`);
  }
}

function calzadoCasual() {
  alert(`Seleccione su calzado`);
  let seleccionCasual = prompt(`Elija su calzado:

  ${item4.id}. ${item4.nombre} ${item4.marca} ${item4.color} - ${item4.precio}
  ${item5.id}. ${item5.nombre} ${item5.marca} ${item5.color} - ${item5.precio}
  ${item6.id}. ${item6.nombre} ${item6.marca} ${item6.color} - ${item6.precio}
  
  0. Salir`);

  while (seleccionCasual !== "0") {
    switch (seleccionCasual) {
      case "1":
        articulosAcumulados += articulosAcumulados + item1.precio;
        alert(
          `${item4.nombre} ${item4.marca} ${item4.color} Agregado al carrito.`
        );

        break;
      case "2":
        articulosAcumulados += articulosAcumulados + item1.precio;
        alert(
          `${item5.nombre} ${item5.marca} ${item5.color} Agregado al carrito.`
        );
        break;

      case "3":
        articulosAcumulados += articulosAcumulados + item1.precio;
        alert(
          `${item6.nombre} ${item6.marca} ${item6.color} Agregado al carrito.`
        );
        break;

      default:
        alert(`Porfavor seleccione una opcion.`);
        break;
    }

    seleccionCasual = prompt(`Elija su calzado:

    ${item4.id}. ${item4.nombre} ${item4.marca} ${item4.color} - ${item4.precio}
    ${item5.id}. ${item5.nombre} ${item5.marca} ${item5.color} - ${item5.precio}
    ${item6.id}. ${item6.nombre} ${item6.marca} ${item6.color} - ${item6.precio}
  
    0. Salir
    
    Subtolal: $${articulosAcumulados}`);
  }
}

class zapatillaItem {
  constructor(id, nombre, marca, color, precio) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
  }

  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

const item1 = new zapatillaItem(
  1,
  "Zapatillas Run 70S ",
  "Adidas",
  "Negra",
  20999
);

const item2 = new zapatillaItem(
  2,
  "Zapatillas Running Coreracer ",
  "Adidas",
  "Blanca",
  15999
);

const item3 = new zapatillaItem(
  3,
  "Zapatillas Running Standar 70S ",
  "Adidas",
  "Azul",
  19799
);

const item4 = new zapatillaItem(
  4,
  "Botas Nike Court Vision ",
  "Nike",
  "Roja",
  23099
);

const item5 = new zapatillaItem(
  5,
  "Zapatillas Chuck All Star ",
  "Converse",
  "Negra",
  14995
);

const item6 = new zapatillaItem(
  6,
  "Zapatillas Lapa OX ",
  "Converse",
  "Azul",
  14399
);

const precioProductosIva = [];
precioProductosIva.push(item1, item2, item3, item4, item5, item6);

for (const zapatillaItem of precioProductosIva) {
  zapatillaItem.sumaIva();
}

let carrito = [];
let articulosAcumulados = 0;

saludarUser();
eleccionDeCalzado();
