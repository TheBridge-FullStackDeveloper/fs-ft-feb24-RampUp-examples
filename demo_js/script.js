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

//Ejercicio 2 : Pedir número al usuario
const guardarNumeros = (introUserNum) => {
  let arrayFinal = [];
  introUserNum = parseInt(prompt("Introduce un número"));
  while (introUserNum != 0) {
    arrayFinal.push(introUserNum);
    introUserNum = parseInt(prompt("Introduce un número"));
  }
  return arrayFinal;
};

//console.log(guardarNumeros().toSorted((a, b) => a - b));

// While 0....N veces
// Do-while 1....N veces

//Ejercicio 2 : Pedir número al usuario
const guardarNumeros2 = () => {
  let arrayFinal = [];
  let introUserNum = NaN;
  do {
    introUserNum = parseInt(prompt("Introduce un número")); //0
    arrayFinal.push(introUserNum);
  } while (introUserNum != 0);

  arrayFinal.pop(); // saca el 0 del final
  return arrayFinal.sort((a, b) => a - b); // ordena
};

//console.log(guardarNumeros2());

function pedirNumeros() {
  let numeros = [];

  while (true) {
    // 6 veces -> 0...5
    const introUserNum = parseInt(prompt("Introduce un número"));
    if (introUserNum == 0) break;
    numeros.push(introUserNum);
  }
  return numeros.sort((a, b) => a - b);
}

// 25.- Crear las variables preI y preJ con valor 0 a continuación cree un bucle que itere 11 veces. En cada iteración se deberá sumar al valor de preI el valor de ++preJ

let preI = 0;
let preJ = 0;

for (let i = 1; i <= 11; i++) {
  preI += ++preJ;
}

// 10.- Crear variable contarHasta10_2 con valor 0 e incrementar su valor con un bucle for hasta que se verifique que contarHasta10_2 === 10

let contarHasta10_2 = 0;

for (; contarHasta10_2 < 10; contarHasta10_2++) {
  console.log(contarHasta10_2);
}

let contarHasta10_22 = 0;

for (let i = 0; i < 10; i++) {
  contarHasta10_22++;
  console.log(contarHasta10_22);
}

// Objetos

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person.firstName);
console.log(person["firstName"]);

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["last-Name"]);

let person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person2.fullName());

let person3 = {
  firstName: "John",
  "last-Name": "Doe",
  id: 5566,
  fullName: function () {
    return person3["firstName"] + " " + person3["last-Name"];
  },
};

const person4 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: () => this.firstName + " " + this.lastName, // no se puede acceder con el this y flecha
};

function ejemploObjetos() {
  let cars = [
    { type: "Fiat", model: "500", color: "white" },
    { type: "Opel", model: "Corsa", color: "Blue" },
    { type: "Peugeot", model: "609", color: "green" },
  ];

  console.log(cars[1].model);
  console.log(cars[2]["color"]);

  let cars2 = [
    { type: "Fiat", model: "500", color: "white", "max-tara": 1500 },
    { type: "Opel", model: "Corsa", color: "Blue", "max-tara": 1600 },
    { type: "Peugeot", model: "609", color: "green", "max-tara": 1700 },
  ];

  console.log(cars2[2]["max-tara"]);
}
ejemploObjetos();

// Llamada a la API para acceder al rate de un producto
//fakestoreapi.com/docs
https: fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data[1].rating.rate));

let car = {
  type: "Fiat",
  model: "500",
  color: "white",
  "max-tara": 1700,
  speed: 0,
  drive: function (newSpeed) {
    this.speed = newSpeed;
    console.log("Estás conduciendo a:" + this.speed);
  },
  getInfo: function () {
    console.log(this.type, this.model, this.color, this["max-tara"]);
  },
};

car.drive(100);

let email = "hola@gmail.com";
let pos = email.search("@");
let username = email.slice(0,pos);

  //Reemplazar parte de un string
  //string-array-string
  let message = "hola que tal";
  let arrMess = message.split(" "); // "" --> [] separando por espacions
  arrMess[0] = "adios";
  arrMess.join(" ");

/*
  - Los años bisiestos son múltiplos de 4
- Los múltiplos de 100 no lo son
- Los múltiplos de 400 sí

year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)

// 100
true && (false||false) --> true && false --> false
// 400
true && (false||true) --> true && true --> true
//4
true && (true||false) --> true&&true --> true

*/


while(true){
    let year = prompt("Introduce un año para saber si es bisiesto");
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
        console.log("Es bisiesto:"+year);
        alert("Es bisiesto:"+year);
        break;
    }else{
        console.log("NO es bisiesto:"+year);
    }
}
