let texto = prompt("Ingrese un numero del 1 al 5");

while (texto !== "EXIT") { 
  
  /* Recomiendo usar "!==" para asegurarse que te manden justo lo que pones, 
  aunque podemos usar metodos como toLowerCase()  para formatear el input y que no importen las mayus.
  
      Quedaria asi: 
       
      while (texto.toLowerCase() !== "exit") {   Tambien podemos usar el metodo trim() para que borre los espacios en blanco al inicio y final! 
  */
  
  switch (texto) {
    case "1":
      alert("No es la correcta");
      console.log("Intento fallido");
      texto = prompt("Ingrese un numero del 1 al 5");
      break;

    case "2":
      alert("Te acercaste bastante");
      console.log("Intento fallido");
      texto = prompt("Ingrese un numero del 1 al 5");
      break;

    case "3":
      alert("No lo se rick");
      console.log("Intento fallido");
      texto = prompt("Ingrese un numero del 1 al 5");
      break;

    case "4":
      alert("Respuesta Correcta");
      console.log("Ingreso exitoso!!");
      texto = prompt("Escriba EXIT para salir");
      break;

    case "5":
      alert("Ni ahi");
      console.log("Intento fallido");
      texto = prompt("Ingrese un numero del 1 al 5");
      break;

    default:
      console.log("No ingreso ningun dato valido");
      texto = prompt("No ingresaste un numero");
      break;
  }
}

console.log("fin del codigo");
