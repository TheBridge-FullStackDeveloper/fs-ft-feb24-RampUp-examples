document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // paraliza envío formulario

  console.log(event.target.elements);
  //Texto
  console.log(event.target.fname.value);
  console.log(event.target.lname.value);
  console.log(event.target.email.value);
  console.log(event.target.tlf.value);
  console.log(event.target.comments.value);

  //Select
  console.log(event.target.favorite.value);
  // Radio
  console.log(event.target.season.value);
  //Checkbox
  console.log(event.target.accept.checked);
  console.log(event.target.spam.checked);

  const fname = event.target.fname.value;
  const lname = event.target.lname.value;
  const email = event.target.email.value;
  const tlf = event.target.tlf.value;
  const favorite = event.target.favorite.value; // select
  const season = event.target.season.value; //radio
  const accept = event.target.accept.checked; //checkbox. Booleano
  const spam = event.target.spam.checked; //checkbox. Booleano
  const comments = event.target.comments.value;

  let msj = "";

  // Lógica de validación
  // 3 < fname < 30 required
  if (fname.length < 3 || fname.length > 30) {
    //err
    console.log("Nombre fuera de tamaño: 3-30");
    msj += "Nombre fuera de tamaño: 3-30\n";
  }

  // 3 < lname < 30 required
  if (lname.length < 3 || lname.length > 30) {
    console.log("Apellido fuera de tamaño: 3-30");
    msj += "Apellido fuera de tamaño: 3-30\n";
  }

  // email .com .es @ require

  //hola@gmail.com
  //false && true && true --> false
  //hola@gmail.c
  //true && true && true --> true

  if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    console.log("Error validación: " + email);
    msj += "Error validación: " + email+"\n";
  }

  // select required ??
  // radio required
  if (season == "") {
    console.log("Selecciona alguna estación del año");
    msj += "Selecciona alguna estación del año\n";
  }

  //aceptar términos y publicidad
  if (!accept || !spam) {
    console.log("Por favor, acepta condiciones y envío de publicidad");
    msj += "Por favor, acepta condiciones y envío de publicidad\n";
  }
  console.log(msj);

  // Comprobar si hay errores
  if (msj.length != 0) {
    alert(msj); //imprime mensaje final de error
    //document.body.innerHTML += msj;
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "#DD1C1A";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    document.getElementById("contact").appendChild(p); // dibuja resultado
  }
  else{
    //Enviar formulario
    //document.querySelector("form").submit();
    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});

/*
0
: 
input#fname
1
: 
input#lname
2
: 
input#email
3
: 
input#tlf
4
: 
select#favorite
5
: 
input#spring
6
: 
input#summer
7
: 
input#autumn
8
: 
input#winter
9
: 
textarea
10
: 
input#accept
11
: 
input#spam
12
: 
input
accept
: 
input#accept
autumn
: 
input#autumn
comments
: 
textarea
email
: 
input#email
favorite
: 
select#favorite
fname
: 
input#fname
lname
: 
input#lname
season
: 
RadioNodeList(4) [input#spring, input#summer, input#autumn, input#winter, value: 'spring']
spam
: 
input#spam
spring
: 
input#spring
summer
: 
input#summer
tlf
: 
input#tlf
winter
: 
input#winter
*/
