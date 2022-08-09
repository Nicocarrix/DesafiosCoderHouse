function saludarUser() {
  alert("Binvenido a ShoeSport");
}

function eleccionDeCalzado(calzado) {
  calzado = prompt(`Seleccione su calzado a comprar:
  1. Deporte
  2. Casual

  0. Salir`);

  while (calzado !== "0") {
    //Mejor usar !== y ponemos "" para que la comparacion funcione
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

  alert(`El monto total es: $${articulosAcumulados}`);
  if (articulosAcumulados == 0) {
    alert(`Gracias por su visita, vuelva pronto`);
  } else if (articulosAcumulados > 0) {
    alert(`Compra realizada con exito.`);
  }
}

function calzadoDeporte() {
  alert(`Seleccione su calzado`);
  let seleccionDeporte = prompt(`Elija su calzado:

  1. ZAPATILLAS ADIDAS RUN 70S NEGRA - $20999
  2. ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA - $15999
  3. ZAPATILLAS RUNNING ADIDAS NEGRA - $19799
  
  0. Salir`);

  while (seleccionDeporte !== "0") {
    // Aca lo mismo
    switch (seleccionDeporte) {
      case "1":
        articulosAcumulados += 20999; //Aca
        alert(`ZAPATILLAS ADIDAS RUN 70S NEGRA Agregado al carrito.`);
        break;
      case "2":
        articulosAcumulados == 15999; //Aca
        alert(`ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA Agregado al carrito.`);
        break;
      case "3":
        articulosAcumulados += 19799; //Aca
        alert(`ZAPATILLAS RUNNING ADIDAS NEGRA Agregado al carrito.`);
        break;

      default:
        alert(`Porfavor seleccione una opcion.`);
        break;
    }

    seleccionDeporte = prompt(`Elija su calzado:

    1. ZAPATILLAS ADIDAS RUN 70S NEGRA - $20999
    2. ZAPATILLAS RUNNING ADIDAS CORERACER NEGRA - $15999
    3. ZAPATILLAS RUNNING ADIDAS NEGRA - $19799
  
    0. Salir
    
    Subtolal: $${articulosAcumulados}`);
  }
}

function calzadoCasual() {
  alert(`Seleccione su calzado`);
  let seleccionCasual = prompt(`Elija su calzado:

  1. BOTAS NIKE COURT VISION MID NBA ROJA - $23099
  2. ZAPATILLA CONVERSE CHUCK TAYLOR ALL STAR 
  CORE OX NEGRA - $14995
  3. ZAPATILLA CONVERSE LAPA OX NEGRA - $14399
  
  0. Salir`);

  while (seleccionCasual != 0) {
    switch (seleccionCasual) {
      case "1":
        articulosAcumulados += 23099;
        alert(`BOTAS NIKE COURT VISION MID NBA ROJA Agregado al carrito.`);

        break;
      case "2":
        articulosAcumulados += 14995;
        alert(
          `ZAPATILLA CONVERSE CHUCK TAYLOR ALL STAR NEGRA Agregado al carrito.`
        );
        break;

      case "3":
        articulosAcumulados += 14399;
        alert(`ZAPATILLA CONVERSE LAPA OX NEGRA Agregado al carrito.`);
        break;

      default:
        alert(`Porfavor seleccione una opcion.`);
        break;
    }

    seleccionCasual = prompt(`Elija su calzado:

    1. BOTAS NIKE COURT VISION MID NBA ROJA - $23099
    2. ZAPATILLA CONVERSE CHUCK TAYLOR ALL STAR NEGRA - $14995
    3. ZAPATILLA CONVERSE LAPA OX NEGRA NEGRA - $14399
  
    0. Salir
    
    Subtolal: $${articulosAcumulados}`);
  }
}

let articulosAcumulados = 0;

saludarUser();
eleccionDeCalzado();
