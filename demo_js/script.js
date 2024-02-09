console.log("Welcome!!!!!");
//alert("Welcome!");

let name = "FullStack";
let number = 3;
number = number + 2; //5 number+=2;
number += 3; // 8

function cruzarCalle() {
  // Semáforo
  let color = prompt("Introduzca color");

  if (color == "green") {
    console.log("Pasar");
  } else if (color == "yellow") {
    console.log("Pasar rápido");
  } else if (color == "blue") {
    console.log("Pasar saltando");
  } else {
    // Valor por defecto ---> ROJO
    console.log("No pasar");
  }
}

function cruzarCalleSwitch() {
  // Semáforo
  let color = prompt("Introduzca color");

  switch (color) {
    case "green":
      console.log("Pasar");
      break;
    case "yellow":
      console.log("Pasar rápido");
      break;
    case "blue":
      console.log("Pasar saltando");
      break;
    default:
      console.log("No pasar");
  }
}

function encenderPC() {
  // 3 condiciones --> green,yellow,red
  let option = prompt("Introduzca opción");

  switch (option) {
    case "reset":
      console.log("F.Reinicia sistema");
    // lógica de reinicio sistema
    case "start":
      console.log("F.Enciende PC");
    case "login":
      console.log("F.Loguearse en el sistema");
      break;

    default:
      console.log("Error de PC");
      break;
  }
}

/*
for (let i = 0; i < 10; i++) {
    console.log("El número es: "+i);
}

for (let i = 0; i <= 10; i++) {
    console.log("El número es: "+i);
}

for (let i = 0; i < 11; i++) {
    console.log("El número es: "+i);
}
*/

function printYears() {
  for (let i = 1996; i <= 2022; i++) {
    // N= 26

    if (i % 2 == 0) {
      //Pares
      continue; // Como un "break" sólo para iteración actual
    }

    if (i > 2011) {
      break;
    }
    console.log("Año " + i);
  }
}

let i = 0;
let text = "";
while (i < 10) {
  text += "The number is " + i+"\n";
  i++;
}
console.log(text);


// Bucle infinito
/*
while(true){
    let mensaje = prompt("introduce algo");
    if(mensaje.length > 0){ // para ver si el mensaje tiene algo
        console.log("Gracias. has enviado: "+mensaje);
        break; // rompe bucle
    }else{
        console.log("No enviaste nada");
    }
}
*/

function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
      let nombre = prompt("introduce nombre");
      if (nombre != "") {
        console.log("Nombre recibido: " + nombre);
        break;
      }else{
        console.log("Has mandado nombre vacío. Intento:"+(intentos+1));
        console.log("Te quedan "+(3-(intentos+1)));
      }

      if (intentos === 2) alert("3 intentos. Tu cuenta ha sido bloqueada");

      intentos++;
    }
  }

  comprobarNombre()

/* Llamadas a funciones (para ejecutarlas) */
//cruzarCalle();
//cruzarCalleSwitch();
//encenderPC();
//printYears();
