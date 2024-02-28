//alert("hola!");

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName

// ID
console.log(document.getElementById("miId4").innerHTML);
console.log(document.getElementById("miId4").innerText);

// Clase
console.log(document.getElementsByClassName("clase2")); //li
console.log(document.getElementsByClassName("clase2")[1]);

console.log(document.getElementsByClassName("clase2")[1].innerHTML);

// Obtener el texto de un enlace
let element = document.getElementsByClassName("clase2")[1]; // me devuelve el li.clase2
console.log(element.getElementsByTagName("a")[0].innerHTML); // li.clase2 > a

console.log(
  document.getElementsByClassName("clase2")[1].getElementsByTagName("a")[0]
    .innerHTML
);

// Obtener todos los textos de los enlaces
let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  console.log(links[i].innerHTML);
  console.log(links[i].pathname);
  console.log(links[i].href);
  links[i].innerHTML += " Tortilla"; // escritura
}

// Escritura
// ID
document.getElementById("miId5").innerHTML = "FullStack";

// Clase
document.getElementsByClassName("miClase")[2].innerHTML = "barrita";

console.log(document.querySelectorAll("#miDiv > .miClase")[0].innerHTML);
console.log(document.querySelectorAll(".miClase")[0].innerHTML);

document.querySelectorAll("ul > .clase1 > a")[0];
document.querySelectorAll(".clase1 > a")[0];

console.log(document.querySelectorAll("ul > .clase1 > a")[2].innerHTML); // tercer elemento

console.log(document.querySelector("ul > .clase1 > a").innerHTML); // sólo el primer elemento

console.log(document.querySelector("#titulo").innerHTML);

let enlaces = document.querySelectorAll("ul > .clase1 > a");

for (let i = 0; i < enlaces.length; i++) {
  console.log(enlaces[i].innerHTML);
}

// El segundo parámetro de addEventListener es la función de callback
//Función de callback: función que se ejecuta a raíz de otra acción

// pintar
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML += Date();
}

// borrar
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "";
});

function displayHideDate() {
  if (document.getElementById("demo2").innerHTML == "") {
    document.getElementById("demo2").innerHTML = Date();
  } else {
    // Fecha pintada previamente
    document.getElementById("demo2").innerHTML = "";
  }
}

document.getElementById("myBtn3").addEventListener("click", displayHideDate);

document.getElementById("boton2").addEventListener("click", function () {
  console.error("Alerta de fusión en el núcleo");
  console.warn("Lean la documentación");
});

// Paso de valores por parámentro
let p1 = 5;
let p2 = 7;
let result = 0;

document.getElementById("boton3").addEventListener("click", function () {
  myFunction(10, 12);
});

function myFunction(a, b) {
  if (result == 0) {
    result = p1 + p2;
    document.getElementById("result2").innerHTML += " " + result;
  } else {
    alert("Ya se hizo la cuenta");
  }
}

/* Sobrecarga de eventos sobre mismo elemento HTML */
function sendAlert() {
  alert("Te fuiste y me dejaste!!!!!");
  document.getElementById("mensaje").style.color = "black";
  document.getElementById("mensaje").style.backgroundColor = "green";
}

function sayHello() {
  alert("Hola, te he echado de menos!!!!!");
  document.getElementById("mensaje").style.color = "blue";
  document.getElementById("mensaje").style.backgroundColor = "yellow";
}
document.querySelector("#mensaje").addEventListener("mouseout", sendAlert);

document.querySelector("#mensaje").addEventListener("mouseover", sayHello);

// Poner/quitar clase
document.querySelector("#boton4").addEventListener("click", function () {
  document.querySelector("#div1").classList.toggle("fondo");
});

document.querySelector("#texto").addEventListener("mouseover", function () {
  document.querySelector("h3").classList.toggle("fondo");
});

document.querySelector("#texto").addEventListener("mouseout", function () {
  document.querySelector("h3").classList.toggle("fondo");
});

document.getElementById("boton5").addEventListener("click",function(){
  //document.getElementById("div2").innerHTML += "<p>queso</p>";
  const parent = document.getElementById("div2");
  const child = document.createElement("p");
  const txt = document.createTextNode("Texto para párrafo desde JS");
  
  child.appendChild(txt); // <p>Texto para párrafo</p>
  parent.appendChild(child);    //<div id="div2"><p>Texto para párrafo</p></div>


  const child2 = document.createElement("p");
  const txt2 = document.createTextNode("Texto 2"+Math.random());
  child2.appendChild(txt2); 
  child2.setAttribute("id","p1"); 

  let oldChild = document.getElementById("p1");
  console.log(oldChild);
  parent.replaceChild(child2,oldChild)
})

document.getElementById("boton6").addEventListener("click",function(){
    const datos = ["Patatas", "Pescado", "Naranja", "Queso"]; // viene de un "servidor externo"

    let template = `<ul>
                      <li>${datos[0]}</li>
                      <li>${datos[1]}</li>
                      <li>${datos[2]}</li>
                      <li>${datos[3]}</li>
                    </ul>`;

    document.getElementById("div3").innerHTML=template;
})

document.getElementById("boton7").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
  ]; // viene de un "servidor externo"
  // Template string
  const lista = `<section>
                  <article>
                    <p>${datos[0].marca}</p>
                    <p>${datos[0].peso}</p>
                    <p>${datos[0].color}</p>
                  </article>
                  <article>
                    <p>${datos[1].marca}</p>
                    <p>${datos[1].peso}</p>
                    <p>${datos[1].color}</p>
                  </article>
                  <article>
                    <p>${datos[2].marca}</p>
                    <p>${datos[2].peso}</p>
                    <p>${datos[2].color}</p>
                </article>
                <article>
                  <p>${datos[3].marca}</p>
                  <p>${datos[3].peso}</p>
                  <p>${datos[3].color}</p>
              </article>

                </section>`;
  document.getElementById("lista2").innerHTML = lista;
});


document.getElementById("boton8").addEventListener("click", function () {
  const datos = [
    { marca: "BMW", peso: 1600, color: "rojo" },
    { marca: "BMW", peso: 1600, color: "azul" },
    { marca: "BMW", peso: 1600, color: "verde" },
    { marca: "BMW", peso: 1600, color: "amarillo" },
  ]; // viene de un "servidor externo"
  // Template string
  let lista = "<section>";

  for (let i = 0; i < datos.length; i++) {
    lista += `<article>
              <p>${datos[i].marca}</p>
              <p>${datos[i].peso}</p>
              <p>${datos[i].color}</p>
            </article>`
  }
    lista += "</section>";
  document.getElementById("lista3").innerHTML = lista;
});


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

  /* Añadir cards con datos de la API usando fetch() */
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
    document.querySelector("main").innerHTML += cards;
  }); // Usa los datos en la tarea que necesites

setTimeout(() => {
  console.log("Retraso de 3 segundos");
}, 3000);

console.log("hola");

//Carrera/Race de llamadas asíncronas
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


