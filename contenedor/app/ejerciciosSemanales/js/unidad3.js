//ambito global 

let nombre = "Karol";
let edad = 36;
let estatura = 1.6;
let esProfesor = true;

let hobbies = ["leer", "tejer", "ver netflix"];//arreglo
let persona = {
    nombre: "Karol",
    edad: 36,
    altura: 1.6,
    esEstudiante: true
};// objetos -> json

console.log(nombre.toUpperCase());
console.log(edad.toString());
console.log(estatura.toFixed(5));
console.log(esProfesor.toString());

console.log(persona.edad);
console.log(hobbies[0]);// salida: tejer
//{
// todo lo que este dentro de una {} es un bloque
//}
/*
// no da error
var apellido = "Leal";
var apellido = "Rojas";
*/
// da error por que let no permite redeclaracion
//let edad =  37;
/*
console.log(hobbies);
let hobbies = "fotografia";
*/
/*
if(true){
    //local
    let nombre = "Karol";
    console.log(nombre);
}

// global
let nombre = "Tatiana";
console.log(nombre);
*/

edad = 5;
const edadMayor = 18;
let mensaje = "";
if (edad >= edadMayor) {
    mensaje = "Es Mayor de edad";

} else {
    mensaje = "Es menor de edad";
}

console.log(mensaje);

//ternario cuando necesito asignar un valor nada mas

edad = 40;

mensaje = (edad >= edadMayor) ? "Es Mayor de edad" : "Es menor de edad";
console.log(mensaje);


let semaforo = "verde";

if (semaforo == "verde") {
    console.log("Siga!");
} else if (semaforo == "amarillo") {
    console.log("Cuidado!")
} else if (semaforo == "rojo") {
    console.log("Detengase!")
} else {
    console.log("El color no esta definido")
}

switch (semaforo) {
    case 'verde':
        console.log("Siga!");
        break;
    case 'amarillo':
        console.log("Cuidado!")
        break;
    case 'rojo':
        console.log("Detengase!")
        break;
    default:
        console.log("El color no esta definido")
        break;
}


for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let listaFrutas = ["banano", "fresa", "melon"];


for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i]);
}


for (let i in listaFrutas) {
    console.log(listaFrutas[i]);
}

let nombreEstudiante = ["Mario", "Pedro", "Maria"];

for (let i in nombreEstudiante) {
    console.log(nombreEstudiante[i]);
}

let arreglos = [listaFrutas, nombreEstudiante];

arreglos.forEach(arreglo => {
    arreglo.forEach(data => {
        console.log(data)
    });
});
console.log(edad); //40

//Ciclo que se usa cuando yo necesito que se ejecute al menos una vez el bloque codigo,


while (edad < 45) {
    edad++
    console.log("WHILE");
    console.log(edad);
}
do {
    edad++
    console.log("DOWHILE");
    console.log(edad);
}
while (edad < 50);
// recibe o no
function multiplicar(a, b) {
    // retornar datos o no
    let total = a * b;
    //console.log(total);
    return total;
}

console.log(multiplicar(5, 6));



document.addEventListener("DOMContentLoaded", function () {
    //selecciona por ID
    let inputTarea = document.querySelector("#tarea");
    console.log(inputTarea);

    //Seleccion por class (1 clase la primera querySelector o totas querySelectorAll)

    let selectSubtitulo = document.querySelectorAll(".subtitulo");
    console.log(selectSubtitulo);
    // seleccion por etiqueta

    let selectSection = document.querySelectorAll("section");
    console.log(selectSection);


    // nuevo ejemplo agregue imagen
    // seleccionar el id contenido 
    let contenido = document.getElementById("contenido");
    let imagen = document.createElement("img");
    imagen.src = "./images/banner.jpg";

    contenido.appendChild(imagen);


    let mensaje_formulario = document.getElementById("mensaje");
    mensaje_formulario.innerText = "Campos requeridos, favor confirmar estan llenos.";

    mensaje_formulario.innerText = "";

    let btnAgregarTarea = document.getElementById("btnAgregar");
    let listaTareas = document.querySelector("#listaTareas");
    let contador = 2;

    btnAgregarTarea.addEventListener("click", function () {
        // input
        let nuevaTarea = document.getElementById("tarea");
        let tarea = nuevaTarea.value;




        if (tarea == "") {
            nuevaTarea.style.borderColor = "red";
            mostrarMensaje(1);
            //setTimeout(mostrarMensaje(3), 2000);
        } else {
            nuevaTarea.style.borderColor = "black";
            mostrarMensaje(2);
            // setTimeout(mostrarMensaje(3), 2000);
            // la lista de tareas (ul)
            let nuevoLiTareas = document.createElement("li");
            nuevoLiTareas.innerText = tarea;
            nuevoLiTareas.dataset.tarea = contador++;
            listaTareas.appendChild(nuevoLiTareas);
            nuevaTarea.value = "";
        }

        function mostrarMensaje(opcion) {
            let mensaje_formulario = document.getElementById("mensaje");
            switch (opcion) {
                case 1:
                    mensaje_formulario.innerText = "Campo tarea es requerido.";
                    break;
                case 2:
                    mensaje_formulario.innerText = "Tarea agregada correctamente!";
                    break;
            }

            setTimeout(() => {
                mensaje_formulario.innerText = "";
            }, 2000);
        }

    })

    listaTareas.addEventListener("click", function (event) {
        let mensajelista = document.getElementById("mensajelista");
        const id = event.target.dataset.tarea;
        const tarea = event.target.innerText;

        mensajelista.innerText = `ID: ${id} - Tarea: ${tarea}`;
    });

})


