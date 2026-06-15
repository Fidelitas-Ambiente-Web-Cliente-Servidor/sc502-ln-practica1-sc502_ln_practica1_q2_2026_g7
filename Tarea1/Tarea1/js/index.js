document.addEventListener("DOMContentLoaded", function () {

    
    let cursosDestacados = [
        {
            nombre: "HTML5 Básico",
            descripcion: "Aprende a crear la estructura de una página web usando etiquetas HTML.",
            imagen: "./img/curso1.png",
            categoria: "Desarrollo Web"
        },
        {
            nombre: "CSS3 Básico",
            descripcion: "Aprende a dar color, forma y estilo a tus páginas web.",
            imagen: "./img/curso2.png",
            categoria: "Diseño Web"
        },
        {
            nombre: "Bootstrap Inicial",
            descripcion: "Aprende a organizar sitios usando contenedores, filas y columnas.",
            imagen: "./img/curso3.png",
            categoria: "Diseño Responsive"
        }
    ];

    
    let contenedorCursos = document.getElementById("contenedor-cursos");

   
    function cargarCursosDestacados() {

        cursosDestacados.forEach(function (curso) {

            
            let tarjeta = document.createElement("article");
            tarjeta.className = "curso";

            
            let imagen = document.createElement("img");
            imagen.src = curso.imagen;
            imagen.alt = curso.nombre;

            
            let titulo = document.createElement("h3");
            titulo.innerText = curso.nombre;

            
            let categoria = document.createElement("p");
            categoria.innerText = curso.categoria;

            
        let descripcion = document.createElement("p");
            descripcion.innerText = curso.descripcion;

            
            let boton = document.createElement("a");
            boton.className = "boton";
            boton.href = "cursos.html";
            boton.innerText = "Ver más";

            
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(titulo);
             tarjeta.appendChild(categoria);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(boton);

            
            contenedorCursos.appendChild(tarjeta);
        });
    }

    
    cargarCursosDestacados();

});