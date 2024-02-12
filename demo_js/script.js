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
  text += "The number is " + i + "\n";
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
    } else {
      console.log("Has mandado nombre vacío. Intento:" + (intentos + 1));
      console.log("Te quedan " + (3 - (intentos + 1)));
    }

    if (intentos === 2) alert("3 intentos. Tu cuenta ha sido bloqueada");

    intentos++;
  }
}

function probandoArrays() {
  let data = [100, 200, 300, 44, 27, 39]; // 0...N-1
  //0...data.length-1
  let textos = ["tortilla", "queso", "barrita"];
  let booleanos = [true, true, false];
  let combinados = [1, "hola", true, [2, 3, 4], [3, 7, 5]];
  let multidimensional = [
    [2, 3, 4],
    [3, 7, 5],
    [4, 2, 7, [3, 5, 2, 4]],
  ];

  console.log(data[1]);
  console.log(data[5]);
  console.log(data[data.length - 1]); // pos 6-1
  console.log(combinados[3]);
  console.log(combinados[3][1]); // 3
  let numbers = combinados[3]; // [2,3,4] almacena el array
  console.log(numbers[1]); // 3 --> equivale a lo anterior
  console.log(multidimensional[2][3][1]); // 5

  // Recorrer array con bucle FOR
  const fruits = ["Banana", "Orange", "Apple", "Strawberry", "Tangerine"]; // 0...fruits.length-1

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  for (let i = 0; i < fruits.length; i++) {
    // imprime primera letra de cada palabra
    console.log(fruits[i][0]);
  }
  //recorriendo cada elemento del array
  for (let i = 0; i < fruits.length; i++) {
    const oneFruit = fruits[i];
    let result = ""; // resultado final --> "B.a.n.a.n.a"
    // Recorriendo cada  string
    for (let j = 0; j < oneFruit.length; j++) {
      result += oneFruit[j] + ".";
    }
    console.log(result);
    console.log(fruits[i]);
  }

  // Añadir elementos
  fruits.push("Papaya");
  console.log(fruits);
  fruits.push("Grapes", "Melon", "Watermelon");
  console.log(fruits);

  // Susituir elemento
  fruits[2] = "Lemon";
  console.log(fruits);

  // Añadir a principio
  fruits.unshift("Pineapple");
  console.log(fruits);

  // Borrar último
  console.log(fruits.pop()); // Watermelon
  console.log(fruits);

  // Convierte a string
  console.log(fruits.toString());

  // ordenar string
  console.log(fruits.sort());
  // ordenar números
  const numeros = [4, 2, 5, 1, 3];
  numeros.sort(function (a, b) {
    return a - b;
  });
  console.log(numeros); // [1, 2, 3, 4, 5]
}

function suma(a, b) {
  console.log("El resultado es " + (a + b));
  return a + b;
}
let resultado = suma(2, 3);
console.log("This is the result: " + resultado);
console.log(resultado * 1000); // Ej -> de m a mm
/*
function resta(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a - b;
  }
  return NaN;
}
*/
/*
function resta(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a - b;
  } else {
    return NaN;
  }
}
*/

function resta(a, b) {
  let res = NaN;
  if (typeof a == "number" && typeof b == "number") {
    res = a - b;
  }
  return res;
}

let resultado2 = resta(2, 3); // -1
console.log(resultado2);
console.log(resta(55, 3));


/* Llamadas a funciones (para ejecutarlas) */
//cruzarCalle();
//cruzarCalleSwitch();
//encenderPC();
//printYears();
//comprobarNombre()
//probandoArrays();
