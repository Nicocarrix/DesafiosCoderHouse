//Constructor Productos predefinidos

class Producto {
  constructor(nombre, color, precio, talle, cantidad) {
    this.nombre = nombre;
    this.color = color;
    this.talle = talle;
    this.cantidad = cantidad;
    this.precio = parseFloat(precio);
    this.disponible = true;
  }

  vender() {
    this.disponible = false;
  }
}

const item1 = new Producto("Zapatillas Nike", "Rojas", 6600);
const item2 = new Producto("Zapatillas Nike", "Negras", 6500);
const item3 = new Producto("Zapatillas Nike", "Azules", 6400);
const item4 = new Producto("Zapatillas Adidas", "Rojas", 6500);
const item5 = new Producto("Zapatillas Adidas", "Negras", 6600);
const item6 = new Producto("Zapatillas Adidas", "Azules", 6400);
const item7 = new Producto("Zapatillas Puma", "Rojas", 6600);
const item8 = new Producto("Zapatillas Puma", "Negras", 6400);
const item9 = new Producto("Zapatillas Puma", "Azules", 6500);
const item10 = new Producto("Zapatillas Rebook", "Blancas", 13400);

// FUNCIONES PRODUCTO PREDEFINOS

function saludo() {
  alert("Bienvenidos a ShoeSport");
}

function elegirOpciones(elegirOpcion) {
  elegirOpcion = prompt(`Seleccione una opcion
    1- Ver todos los articulos

    2- Filtrar por colores

    0- Salir `);

  while (elegirOpcion !== "0") {
    switch (elegirOpcion) {
      case "1":
        agregarCarrito();
        break;

      case "2":
        filtrar();
        break;

      default:
        break;
    }

    elegirOpcion = prompt(`Seleccione una opcion
    1- Ver todos los articulos

    2- Filtrar por colores

    Subtotal $${articulosAcumulados}

    0- Salir `);
  }

  alert(`
      Monto total a pagar: $${articulosAcumulados}
      Monto con IVA: $${articulosAcumulados * 1.21}`);

  if (articulosAcumulados == 0) {
    alert(`Gracias por su visita, vuelva pronto`);
  } else if (articulosAcumulados > 0) {
    alert(`Compra realizada con exito.`);
  }
}

function agregarCarrito(preguntar) {
  preguntar = prompt(`Seleccione su articulo
    1- ${item1.nombre} ${item1.color} - $${item1.precio}
    2- ${item2.nombre} ${item2.color}- $${item2.precio}
    3- ${item3.nombre} ${item3.color}- $${item3.precio}
    4- ${item4.nombre} ${item4.color}- $${item4.precio}
    5- ${item5.nombre} ${item5.color}- $${item5.precio}
    6- ${item6.nombre} ${item6.color}- $${item6.precio}
    7- ${item7.nombre} ${item7.color}- $${item7.precio}
    8- ${item8.nombre} ${item8.color}- $${item8.precio}
    9- ${item9.nombre} ${item9.color}- $${item9.precio}
    10- ${item10.nombre} ${item10.color}- $${item10.precio}
    
    

    0- Salir `);

  while (preguntar !== "0") {
    switch (preguntar) {
      case "1":
        nombreP = item1.nombre;
        colorP = item1.color;
        talleP = prompt(`Seleccione Talle`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item1.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );

        articulosAcumulados += articulosAcumulados + item1.precio * cantidadP;

        break;

      case "2":
        nombreP = item2.nombre;
        colorP = item2.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item2.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item2.precio * cantidadP;
        break;

      case "3":
        nombreP = item3.nombre;
        colorP = item3.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item3.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item3.precio * cantidadP;
        break;

      case "4":
        nombreP = item4.nombre;
        colorP = item4.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item4.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item4.precio * cantidadP;
        break;

      case "5":
        nombreP = item5.nombre;
        colorP = item5.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item5.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item5.precio * cantidadP;
        break;

      case "6":
        nombreP = item6.nombre;
        colorP = item6.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item6.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item6.precio * cantidadP;
        break;

      case "7":
        nombreP = item7.nombre;
        colorP = item7.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item7.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item7.precio * cantidadP;
        break;

      case "8":
        nombreP = item8.nombre;
        colorP = item8.color;
        talleP = prompt(`Seleccione Talle del 38 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item8.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item9.precio * cantidadP;
        break;

      case "9":
        nombreP = item9.nombre;
        colorP = item9.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item9.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item9.precio * cantidadP;
        break;

      case "10":
        nombreP = item10.nombre;
        colorP = item10.color;
        talleP = prompt(`Seleccione Talle del 39 al 42`);
        cantidadP = prompt(`Elija la cantidad`);
        precioP = item10.precio;
        arrayProductos.push(
          new Producto(nombreP, colorP, precioP, talleP, cantidadP)
        );
        articulosAcumulados += articulosAcumulados + item10.precio * cantidadP;
        break;

      default:
        alert(`Seleccione un articulo`);

        break;
    }

    console.log(arrayProductos);

    for (const producto of arrayProductos) {
      alert(
        `${producto.nombre} ${producto.color} Talle: ${producto.talle} Cantidad: ${producto.cantidad} - Agregado al carrito`
      );
    }

    preguntar = prompt(`Seleccione su articulo
    1- ${item1.nombre} ${item1.color} - $${item1.precio}
    2- ${item2.nombre} ${item2.color}- $${item2.precio}
    3- ${item3.nombre} ${item3.color}- $${item3.precio}
    4- ${item4.nombre} ${item4.color}- $${item4.precio}
    5- ${item5.nombre} ${item5.color}- $${item5.precio}
    6- ${item6.nombre} ${item6.color}- $${item6.precio}
    7- ${item7.nombre} ${item7.color}- $${item7.precio}
    8- ${item8.nombre} ${item8.color}- $${item8.precio}
    9- ${item9.nombre} ${item9.color}- $${item9.precio}
    10- ${item10.nombre} ${item10.color}- $${item10.precio}
    
    Subtotal = $${articulosAcumulados} 
    
    0- Salir `);
  }
}

function filtrar(ingresado) {
  ingresado = prompt(`Elegir por color:
  1-Azul
  2-Rojo
  3-Negro
  4-Blanco
  
  0- Salir`);

  while (ingresado !== "0") {
    switch (ingresado) {
      case "1":
        colorElegido1 = producto
          .filter(function (color) {
            return color.color === "Azules";
          })
          .map(function (nombre) {
            return nombre.nombre + " " + nombre.color + " $" + nombre.precio;
          });

      case "2":
        colorElegido2 = producto
          .filter(function (color) {
            return color.color === "Rojas";
          })
          .map(function (nombre) {
            return nombre.nombre + " " + nombre.color + " $" + nombre.precio;
          });

      case "3":
        colorElegido3 = producto
          .filter(function (color) {
            return color.color === "Negras";
          })
          .map(function (nombre) {
            return nombre.nombre + " " + nombre.color + " $" + nombre.precio;
          });
      case "4":
        colorElegido4 = producto
          .filter(function (color) {
            return color.color === "Blancas";
          })
          .map(function (nombre) {
            return nombre.nombre + " " + nombre.color + " $" + nombre.precio;
          });

      default:
        break;
    }

    /* PRODUCTOS AZULES */
    if (ingresado === "1") {
      let ingreso = prompt(`Elije tu articulo:

  1- ${colorElegido1[0]}
  2- ${colorElegido1[1]}
  3- ${colorElegido1[2]}
  
  0- Salir
  `);
      switch (ingreso) {
        case "1":
          nombreP = item3.nombre;
          colorP = item3.precio;
          precioP = item3.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido1[0]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );
          articulosAcumulados += articulosAcumulados + item3.precio * cantidadP;
          break;

        case "2":
          nombreP = item6.nombre;
          colorP = item6.precio;
          precioP = item6.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido1[1]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item6.precio * cantidadP;
          break;

        case "3":
          nombreP = item9.nombre;
          colorP = item9.precio;
          precioP = item9.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido1[2]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item9.precio * cantidadP;
          break;

        default:
          alert("Ingrese datos.");
          break;
      }

      /* PRODUCTOS ROJOS */
    } else if (ingresado === "2") {
      let ingreso = prompt(`Elije tu articulo:

  1- ${colorElegido2[0]}
  2- ${colorElegido2[1]}
  3- ${colorElegido2[2]}
  
  0- Salir
  `);
      switch (ingreso) {
        case "1":
          nombreP = item1.nombre;
          colorP = item1.precio;
          precioP = item1.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido2[0]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );
          articulosAcumulados += articulosAcumulados + item1.precio * cantidadP;
          break;

        case "2":
          nombreP = item4.nombre;
          colorP = item4.precio;
          precioP = item4.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido2[1]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item4.precio * cantidadP;
          break;

        case "3":
          nombreP = item7.nombre;
          colorP = item7.precio;
          precioP = item7.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido2[2]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item7.precio * cantidadP;
          break;

        default:
          alert("Ingrese datos.");
          break;
      }

      /* PRODUCTOS NEGROS */
    } else if (ingresado === "3") {
      let ingreso = prompt(`Elije tu articulo:

  1- ${colorElegido3[0]}
  2- ${colorElegido3[1]}
  3- ${colorElegido3[2]}
  
  0- Salir
  `);

      switch (ingreso) {
        case "1":
          nombreP = item2.nombre;
          colorP = item2.precio;
          precioP = item2.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido3[0]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );
          articulosAcumulados += articulosAcumulados + item2.precio * cantidadP;
          break;

        case "2":
          nombreP = item5.nombre;
          colorP = item5.precio;
          precioP = item5.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido3[1]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item5.precio * cantidadP;
          break;

        case "3":
          nombreP = item8.nombre;
          colorP = item8.precio;
          precioP = item8.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido3[2]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );

          articulosAcumulados += articulosAcumulados + item8.precio * cantidadP;
          break;

        default:
          alert("Ingrese datos.");
          break;
      }

      /* PRODUCTOS BLANCOS */
    } else if (ingresado === "4") {
      let ingreso = prompt(`Elije tu articulo:

  1- ${colorElegido4[0]}
  
  
  0- Salir
  `);

      switch (ingreso) {
        case "1":
          nombreP = item10.nombre;
          colorP = item10.precio;
          precioP = item10.precio;
          talleP = prompt(`Ingrese Talle`);
          cantidadP = prompt(`Ingrese cantidad`);
          alert(
            `${colorElegido4[0]} Talle: ${talleP} Cantidad: ${cantidadP} - A??adido al carrito`
          );

          arrayProductos.push(
            new Producto(nombreP, colorP, precioP, talleP, cantidadP)
          );
          articulosAcumulados +=
            articulosAcumulados + item10.precio * cantidadP;
          break;
      }
    }

    ingresado = prompt(`Elegir por color:
  
  1-Azul
  2-Rojo
  3-Negro
  4-Blanco

  Subtotal: ${articulosAcumulados}
  
  0- Salir`);
  }
}

//FUNCIONES PRODUCTO INGRESADO POR EL USUARIO

function cards() {
  for (const productos of producto) {
    let newCard = document.getElementById("cards-js");
    card = document.createElement("div");
    card.className = "cards";
    card.innerHTML += `<p>${productos.nombre}</p> 
    <p>$${productos.precio}</p>`;

    newCard.appendChild(card);
    console.log(card);
  }
}

function addCards() {
  nombreP = prompt(`Ingrese nombre de producto`);
  colorP = prompt(`Ingrese color`);
  precioP = productoAdd.precio;
  arrayProductosAdd.push(new ProductoCards(nombreP, colorP, precioP));

  console.log(arrayProductosAdd);

  for (const productos of arrayProductosAdd) {
    let newCard2 = document.getElementById("cards-js");
    card2 = document.createElement("div");
    card2.className = "cards rojo";
    card2.innerHTML += `<p>${productos.nombre} ${productos.color}</p> 
    <p>$${productos.precio} Producto a??adido </p>`;

    newCard2.appendChild(card2);
    console.log(card2);
  }
}

//CONSTRUCTOR DE PRODUCTOS ELEGIDOS POR EL USUARIO

class ProductoCards {
  constructor(nombre, color, precio) {
    this.nombre = nombre;
    this.color = color;
    this.precio = parseFloat(precio);
    this.disponible = true;
  }

  vender() {
    this.disponible = false;
  }
}

const productoAdd = new ProductoCards("Name", "Color", 2300);

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

let arrayProductos = [];
let arrayProductosAdd = [];
let articulosAcumulados = 0;

/* console.log(producto);
  console.log(arrayProductos); */

/* saludo(); */
/* elegirOpciones(); */
cards();
addCards();
