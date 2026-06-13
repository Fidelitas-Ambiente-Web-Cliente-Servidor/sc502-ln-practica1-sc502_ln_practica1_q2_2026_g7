console.log("JS funcionando");
// Array de cursos

const cursos = [
    {
        nombre: "HTML5 Básico",
        descripcion: "Aprendé la estructura básica de una página web.",
        categoria: "Desarrollo Web",
        duracion: "4 semanas",
        precio: "₡35.000",
        imagen: "./img/curso1.png"
    },
    {
        nombre: "CSS3 Básico",
        descripcion: "Aprendé estilos, colores y diseño.",
        categoria: "Desarrollo Web",
        duracion: "5 semanas",
        precio: "₡40.000",
        imagen: "./img/curso2.png"
    },
    {
        nombre: "Bootstrap Inicial",
        descripcion: "Aprendé a construir diseños modernos con Bootstrap.",
        categoria: "Desarrollo Web",
        duracion: "3 semanas",
        precio: "₡30.000",
        imagen: "./img/curso3.png"
    },
    {
        nombre: "JavaScript Básico",
        descripcion: "Aprendé programación para crear páginas dinámicas.",
        categoria: "Programación",
        duracion: "6 semanas",
        precio: "₡45.000",
        imagen: "./img/curso4.png"
    },
    {
        nombre: "Python Inicial",
        descripcion: "Introducción práctica al lenguaje Python.",
        categoria: "Programación",
        duracion: "8 semanas",
        precio: "₡50.000",
        imagen: "./img/curso6.jpg"
    },
    {
        nombre: "Java Fundamentos",
        descripcion: "Aprendé lógica de programación y POO.",
        categoria: "Programación",
        duracion: "8 semanas",
        precio: "₡55.000",
        imagen: "./img/curso5.png"
    }
];

// Elementos del DOM
const contenedor = document.getElementById("contenedor-cursos");
const busqueda = document.getElementById("busqueda");
const categoria = document.getElementById("categoria");

// Función para mostrar cursos
function mostrarCursos(listaCursos) {

    contenedor.innerHTML = "";

    listaCursos.forEach(curso => {

        contenedor.innerHTML += `
            <article class="curso">
                <img src="${curso.imagen}" alt="${curso.nombre}">
                <h3>${curso.nombre}</h3>
                <h4>${curso.categoria}</h4>

                <p>${curso.descripcion}</p>

                <p><strong>Duración:</strong> ${curso.duracion}</p>
                <p><strong>Precio:</strong> ${curso.precio}</p>
            </article>
        `;
    });

    // Mensaje cuando no hay resultados
    if (listaCursos.length === 0) {
        contenedor.innerHTML =
            "<p>No se encontraron cursos con esos criterios.</p>";
    }
}

// Función de filtrado
function filtrarCursos() {

    const texto = busqueda.value.toLowerCase();
    const categoriaSeleccionada = categoria.value;

    const resultado = cursos.filter(curso => {

        const coincideTexto =
            curso.nombre.toLowerCase().includes(texto) ||
            curso.descripcion.toLowerCase().includes(texto);

        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            curso.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    mostrarCursos(resultado);
}

// Eventos
busqueda.addEventListener("input", filtrarCursos);
categoria.addEventListener("change", filtrarCursos);

// Mostrar cursos al iniciar
mostrarCursos(cursos);
