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
let username = email.slice(0, pos);

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

while (true) {
  let year = prompt("Introduce un año para saber si es bisiesto");
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log("Es bisiesto:" + year);
    alert("Es bisiesto:" + year);
    break;
  } else {
    console.log("NO es bisiesto:" + year);
  }
}

/*
Crea una función que determine si una array contiene valores booleanos.
	Ejemplos de input
	//[ 0, null, undefined, NaN] --> false
	//[null, false,1]  --> true (editado) 
  Al menos 1 elemento debe ser un booleano (true/false)
  */

function comprobarBooleanos(data) {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == "boolean") {
      return true;
    }
  }
  return false; // si en el bucle no se encuentran booleanos
}

console.log(comprobarBooleanos([1, 2, "hola", true, "que"])); // true
console.log(comprobarBooleanos([1, 2, "hola", "hahha"])); // false

function eliminarDuplicados(arrOriginal) {
  let arrSinDuplicados = [];
  //Miro el primer item del array original
  for (let i = 0; i < arrOriginal.length; i++) {
    //Comparo i con los demás items mediante el contador j
    for (let j = 0; j < arrOriginal.length; j++) {
      //Compruebo con j !=i que no lo estoy comparando consigo mismo.
      while (j != i) {
        //Si los valores de ambas posiciones coinciden...
        if (arrOriginal[i] === arrOriginal[j]) {
          //... miro a ver si ya está guardado, y si no lo está, lo guardo, si lo está, salgo.
          for (let l = 0; l < arrSinDuplicados.length; l++) {
            if (arrOriginal[i] !== arrSinDuplicados[l]) {
              arrSinDuplicados.push(arrOriginal[i]);
            } else {
              return "error1";
              break;
            }
          }
        } else {
          return arrSinDuplicados;
          break;
        }
      }
    }
  }
  return arrSinDuplicados;
}

function eliminarDuplicados(array) {
  let nuevoArray = [];
  for (i = 0; i < array.length; i++) {
    if (!nuevoArray.includes(array[i])) {
      nuevoArray.push(array[i]);
      console.log(nuevoArray);
    }
  }
  return nuevoArray;
}

function eliminarDuplicados(cosota) {
  let resultao = cosota.filter((item, index) => cosota.indexOf(item) === index);
  return resultao;
}

function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    // 1 no entraría, daría true. 2 no entraría, daría true. 3 entraría pero no se cumpliría la condicion.
    if (numero % i === 0) {
      // 4 entraría y cumpliría la condicion. 5 entraría pero se saldría porque no cumple
      return false;
    }
  }
  return true;
}

/* Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase */
//Tortilla
function contarLetras(frase, letra) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() == letra.toLowerCase()) {
      contador++;
    }
  }
  return contador;
}

contarLetras("hola,que tal", "a");
contarLetras("hola,que talo", "o");

/* Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números */
// [2,52] --> iterar 50
// [3,53] --> iterar 50

function imprimirImpares(num) {
  for (let i = num; i <= num + 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

imprimirImpares(2);
imprimirImpares(3);

/*
function eliminarDuplicados(arrayOriginal) {
  let arraySinDuplicados = [];

  // Sustuir ordenación por algoritmo Bubble sort (sin métodos)
  arrayOriginal.sort((a, b) => a - b);

  for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] !== arrayOriginal[i + 1]) {
      arraySinDuplicados.push(arrayOriginal[i]);
    }
  }
  return arraySinDuplicados;
}

*/

/*
function eliminarDuplicados(array) {

  // Creo un array para almacenar los numeros sin duplicar
  let sinDuplicados = [];

  // Recorremos el array original para tener el primer miembro de la comparación
  for (let i = 0; i < array.length; i++) {

      // Creo una variable para detectar si encuentra alguna igualdad
      let igualdad = false;
      // La declaro aquí porque a cada vuelta hago que se resetee a false

      // Recorremos el nuevo array (sinDuplicados) para tener el segundo miembro de la comparación
      for (let j = 0; j < sinDuplicados.length; j++) {

          // Si encuentra una igualdad por el array, establecemos igualdad como true
          if (array[i] == sinDuplicados[j]) {
              igualdad = true;
          }
      }
      // Si no ha encontrado ninguna igualdad, subirá el numero
      if (igualdad == false)
          sinDuplicados.push(array[i]);
  }
  return sinDuplicados;
}

*/

/*
8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul]
*/
/*
let Led = {
  rojo:"Rojo",
  verde:"Verde",
  azul:"Azul"
}

let RGB = [Led.rojo,Led.verde,Led.azul]
*/

/*
This problem was asked by Netflix.
Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a^2+ b^2= c^2.
*/

function containsPythagoreanTriplet(data) {
  if (data[0] ** 2 + data[1] ** 2 === data[2] ** 2) return true;

  return false;
}

let values = [3, 4, 5]; // a,b,c
containsPythagoreanTriplet(values);

function containsPythagoreanTriplet(data) {
  let a = data[0];
  let b = data[1];
  let c = data[2];

  if (a ** 2 + b ** 2 === c ** 2) return true;

  return false;
}

// Destructuring
function containsPythagoreanTriplet([a, b, c]) {
  // Validación del array recibido por parámetro

  if (a ** 2 + b ** 2 === c ** 2) return true;

  return false;
}

let values = [3, 4, 5]; // a,b,c
containsPythagoreanTriplet(values);

function accum(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    // iterar letra
    for (let j = 0; j < i + 1; j++) {
      // iterar por repe de letra
      if (j == 0) {
        newString += s[i].toUpperCase(); // mayuscula
      } else {
        newString += s[i].toLowerCase(); // minuscula
      }
    }
    if (i != s.length - 1) {
      newString += "-";
    }
  }
  return newString;
}

function repetirCaracteres() {
  let accum = "abcd";
  let finalResult = "";

  for (let i = 0; i < accum.length; i++) {
    let character = accum[i];

    console.log(character.toUpperCase() + character.repeat(i) + "-");
    finalResult += `${character.toUpperCase() + character.repeat(i)}-`;
  }

  return finalResult;
}

function repetirCaracteres2(s) {
  let array = [];
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    //Me mete todos los valores resultantes en un array, que tendría que pasar en algún momento a string
    array.push(s[i].toUpperCase() + s[i].repeat(i));
  } //Queda psar a string para poder iterar con el .charAt y el .toUpperCase
  return array.join("-");
}

var users = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

let resultDetails = users.map((user) => {
  let mark = Math.random() * 100;
  user.mark = mark;
  return user;
});
//for me resultDetails
/*
0: {user: "👩🏻‍💻", mark: 76.03572182106969}
1: {user: "👨🏾‍💻", mark: 71.62190728557552}
2: {user: "💃", mark: 56.21776553271223}
3: {user: "👨🏻‍🎓", mark: 25.801390164601944}
4: {user: "🧑🏻‍🏫", mark: 85.74297532451267}
5: {user: "🦸‍♂️", mark: 67.11805101358996}
6: {user: "🧟‍♂️", mark: 18.253450044782184}
*/

var selectedCandidate = resultDetails.filter((user) => {
  if (user.mark > 50) {
    return user;
  }
});
/* selected candidate 
0: {user: "👩🏻‍💻", mark: 76.03572182106969}
1: {user: "👨🏾‍💻", mark: 71.62190728557552}
2: {user: "💃", mark: 56.21776553271223}
3: {user: "🧑🏻‍🏫", mark: 85.74297532451267}
4: {user: "🦸‍♂️", mark: 67.11805101358996}
*/

let usuarios = [
  { user: "👩🏻‍💻" },
  { user: "👨🏾‍💻" },
  { user: "💃" },
  { user: "👨🏻‍🎓" },
  { user: "🧑🏻‍🏫" },
  { user: "🦸‍♂️" },
  { user: "🧟‍♂️" },
];

let aprobados = usuarios
  .map((user) => {
    let mark = Math.random() * 100;
    user.mark = mark;
    return user;
  }) //[]
  .filter((user) => user.mark > 50) //[]
  .reduce((acc, elem) => acc + elem.mark, 0) // Num
  .toFixed(2);

console.log(aprobados / usuarios.length); // promedio notas

// Create Team

let TeamMembers = selectedCandidate.reduce((teamMembers, user) => {
  teamMembers.push(user);
  return teamMembers;
}, []);

/*
8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
*/

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];
// Resultado --> 60
// category --> code
console.log(
  books
    .filter((book) => book.category == "code")
    .reduce((acc, item) => acc + item.price, 0)
);

// Concatenar con Spread operator y otras opciones
// arr1 --> 100
// arr2 --> 500
//concatena los 2 arrays en 1 único array [1,2,3,5,7,8]
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}

arr1.concat(arr2);
// [1,2,3,5,7,8]
console.log([...arr1, ...arr2]);

// Field puede ser name o category
function sortByKey(field) {
  const products = [
    { name: "roomba", category: "home" },
    { name: "iPad", category: "electronics" },
    { name: "lego Star Wars", category: "toys" },
  ];
  // sort by name
  products.sort((a, b) => {
    const nameA = a[field].toUpperCase(); // ignore upper and lowercase
    const nameB = b[field].toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });
  return products;
}

sortByKey("name");
sortByKey("category");

function combineAllArrays(...args) {
  let resultado = [];

  for (let i = 0; i < args.length; i++) {
    resultado = [...resultado, ...args[i]];
  }
  return resultado;
}

combineAllArrays(
  [2, 7, 3, 1],
  [33, 22, 11, 1],
  [2, 7, 4, 12],
  [2, 44, 22, 7, 3, 1]
); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

function combineAllArrays(...args) {
  let resultado = [];

  args.forEach((array) => (resultado = [...resultado, ...array]));
  return resultado;
}

function sumAndSquare(...args) {
  return args
    .map((item) => item * item) // cuadrados
    .reduce((acc, item) => acc + item, 0); // suma
}

const sumAndSquare = (...args) =>
  args
    .map((item) => item * item) // cuadrados
    .reduce((acc, item) => acc + item, 0); // suma

fetch("https://fakestoreapi.com/products/1") // Lanza la petición HTTP GET
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS
  .then((data) => console.log(data)); // Usa los datos en la tarea que necesites

fetch("https://fakestoreapi.com/products/1") // Lanza la petición HTTP GET
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS
  .then((product) => console.log(product)); // Usa los datos en la tarea que necesites

fetch("https://fakestoreapi.com/products/1") // Lanza la petición HTTP GET
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
  .then((product) => {
    document
      .querySelectorAll("p")
      .forEach((p) => (p.innerHTML = product.title));
    document.body.innerHTML += product.price; // añadir precio al final del body
  }); // Usa los datos en la tarea que necesites

fetch("https://fakestoreapi.com/products") //  HTTP GET todos los productos
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS {}
  .then((productList) => {
    // Pintar tarjetas con título y precio
    let cards = `<section>`;
    for (let i = 0; i < productList.length; i++) {
      cards += `
    <article>
        <h1>${productList[i].title}</h1>
        <p>${productList[i].price}</p>
    </article>`;
    }
    cards += `</section>`;
    document.querySelector("main").innerHTML = cards;
  }); // Usa los datos en la tarea que necesites

setTimeout(() => {
  console.log("Retrasado por 3 segundo.");
}, 3000);

console.log("hola");

//Carrera de llamadas asíncronas
fetch("https://fakestoreapi.com/products") // Lanza la petición HTTP GET
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS
  .then((product) => console.log(product)); // Usa los datos en la tarea que necesites

fetch("https://fakestoreapi.com/products/1") // Lanza la petición HTTP GET
  .then((res) => res.json()) // Tranforma datos a JSON para tratar en JS
  .then((product) => console.log("BBBBB" + product.title)); // Usa los datos en la tarea que necesites

console.log("hola");

// Llamada a función asíncrona
function getGitHubUserProfile(username) {
  return fetch("https://api.github.com/users/" + username) //Promesa
    .then((user) => user.json())
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
}

//insertar en body
//json.stringify()
getGitHubUserProfile("imisstheoldpabl0").then(
  (data) => (document.body.innerHTML = JSON.stringify(data))
);

// Esto no funciona por la asincronía
/*
let resultado = getGitHubUserProfile("imisstheoldpabl0")
document.body.innerHTML = JSON.stringify(resultado)
*/

function getGitHubUserProfile(username) {
  return fetch("https://api.github.com/users/" + username) //Promesa
    .then((user) => user.json()) //Fulfilled
    .catch((error) => { //Rejected
      console.log(error);
      alert("Error en la llamada "+error);
    });
}

//insertar en body
//json.stringify()
getGitHubUserProfile("imisstheoldpabl0")
  .then(data => {
    if(data != undefined){
      document.body.innerHTML = JSON.stringify(data);
    }else{ // Error de otro tipo
      document.body.innerHTML = "Error interno en la petición"
    }
  })


// No se sabe cuál llegará primero
const pokeURL1  = 'https://pokeapi.co/api/v2/pokemon/pikachu/';
const pokeURL2 = 'https://pokeapi.co/api/v2/pokemon/ditto/';

fetch(pokeURL1)
  .then((res) => res.json())
  .then((data) => {
    console.log('HA TERMINADO PIKACHU');
    console.log(data);
  });

fetch(pokeURL2)
  .then((res) => res.json())
  .then((data) => {
    console.log('HA TERMINADO DITTO');
    console.log(data);
  });


/*********** Forma 3 ************/
console.time("***timer2***");
let datos0 = "";
let datos1 = "";
Promise.all([
  fetch(rickMortyURL).then((res) => res.json()),
  fetch(pokeURL).then((res) => res.json()),
]).then((data) => {
  const rickMortyData = data[0];
  const pokemonData = data[1];
  console.log(data[0])
  console.log(data[1])
  datos0 = data[0] // Almacena resultado Rick & Morty
  datos1 = data[1] // Almacena resultado Ditto

  console.timeEnd("***timer2***");
});


// Hacer la petición a la API
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Crear un nuevo elemento de imagen y establecer su src a la imagen del personaje
        const img = document.createElement('img');
        img.src = data.image;

        // Crear un nuevo elemento de título y establecer su texto al nombre del personaje
        const h1 = document.createElement('h1');
        h1.textContent = data.name;

        // Añadir los elementos al cuerpo del documento
        document.body.appendChild(h1);
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });

