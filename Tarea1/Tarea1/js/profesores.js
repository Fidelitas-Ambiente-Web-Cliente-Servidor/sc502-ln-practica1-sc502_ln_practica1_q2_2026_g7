
document.addEventListener("DOMContentLoaded", function () {

  
    /*
    aqui iniciamos con los arreglos (informacion que va a desplegar cada modal cuando
    precionas ver mas)
    */
    let profesores = [
        {
            id: 1,
            nombre: "Camelia Ilie Cardoza",
            especialidad: "Rectora",
            descripcion: "Doctorado en Administración de Empresas, Universidad Pontificia de Comillas.",
            foto: "https://incae.edu/wp-content/uploads/2024/03/Camelia-Ilie-Cardoza-INCAE.jpg",
            correo: "camelia.ilie@novatech.ac.cr",
            cursosQueImparte: ["Estrategia Corporativa", "Liderazgo Ejecutivo"]
        },
        {
            id: 2,
            nombre: "Roy Gerardo Zúñiga",
            especialidad: "Vicerrector Académico",
            descripcion: "Ph.D Ingeniería Industrial, énfasis en Estrategia de Operaciones y Dinámica de Sistemas.",
            foto: "https://incae.edu/wp-content/uploads/2024/03/Roy-Gerardo-Zuniga-INCAE.jpg",
            correo: "roy.zuniga@novatech.ac.cr",
            cursosQueImparte: ["Gestión de Operaciones", "Dinámica de Sistemas"]
        },
        {
            id: 3,
            nombre: "Silke Verena Bucher",
            especialidad: "Decana de Facultad e Investigación",
            descripcion: "Ph.D Gestión del Cambio Estratégico. Universidad de St. Gallen.",
            foto: "https://incae.edu/wp-content/uploads/2024/03/Silke-Verena-Bucher-INCAE.jpg",
            correo: "silke.bucher@novatech.ac.cr",
            cursosQueImparte: ["Gestión del Cambio", "Metodología de la Investigación"]
        },
        {
            id: 4,
            nombre: "Carla Fernández Corrales",
            especialidad: "Directora Senior de Educación Ejecutiva & INCAE Online",
            descripcion: "Ph.D en Administración de Negocios. Universidad de Illinois en Urbana-Champaign.",
            foto: "https://incae.edu/wp-content/uploads/2024/03/Carla-Fernandez-Corrales-INCAE-04.jpg",
            correo: "carla.fernandez@novatech.ac.cr",
            cursosQueImparte: ["Marketing Digital", "Modelos de Negocios Online"]
        }
    ];

  // lo que el DOM va a identificar
    let contenedorProfesores = document.getElementById("contenedor-profesores");
    let modal = document.getElementById("modalProfesor");
    let cuerpoModal = document.getElementById("modal-cuerpo-detalle");
    let btnCerrarModal = document.getElementById("btnCerrarModal");
    let mensajeSistema = document.getElementById("mensaje-sistema");


    function cargarProfesores() {
        if (!contenedorProfesores) return;

        contenedorProfesores.innerHTML = "";

        profesores.forEach(profesor => {
        
            let article = document.createElement("article");
            article.className = "profesor";

            //se asigna el atributo data
            article.dataset.idProfesor = profesor.id;


            article.innerHTML = `
                <img src="${profesor.foto}" alt="Foto de ${profesor.nombre}">
                <h4>${profesor.nombre}</h4>
                <h3>${profesor.especialidad}</h3>
                <p>${profesor.descripcion}</p>
                <button class="boton">Ver mas</button>
            `;


            contenedorProfesores.appendChild(article);
        });


        gestionarMensaje("Profesores cargados con exito de manera dinamica.", "green");
    }

    //se define el evento de hacer click
    contenedorProfesores.addEventListener("click", function (event) {
       
        let tarjetaSeleccionada = event.target.closest(".profesor");
        
        if (tarjetaSeleccionada) {
            
            let idABuscar = tarjetaSeleccionada.dataset.idProfesor;

            
            let profesorEncontrado = null;
            for (let i = 0; i < profesores.length; i++) {
                if (profesores[i].id == idABuscar) {
                    profesorEncontrado = profesores[i];
                    break;
                }
            }

          
            if (profesorEncontrado) {
                
              
                let listaCursos = "";
                profesorEncontrado.cursosQueImparte.forEach(curso => {
                    listaCursos += `<li>${curso}</li>`;
                });

                
                cuerpoModal.innerHTML = `
                    <div style="text-align: center; margin-bottom: 15px;">
                        <img src="${profesorEncontrado.foto}" style="max-width: 130px; border-radius: 50%;" alt="${profesorEncontrado.nombre}">
                    </div>
                    <h4>${profesorEncontrado.nombre}</h4>
                    <p><strong>Especialidad:</strong> ${profesorEncontrado.especialidad}</p>
                    <p><strong>Descripción:</strong> ${profesorEncontrado.descripcion}</p>
                    <p><strong>Correo:</strong> <a href="mailto:${profesorEncontrado.correo}">${profesorEncontrado.correo}</a></p>
                    <h5>Cursos que imparte:</h5>
                    <ul>
                        ${listaCursos}
                    </ul>
                `;

                
                modal.style.display = "block";
                modal.classList.add("show");
            } else {
                gestionarMensaje("Error: No se encontró información del profesor.", "red");
            }
        }
    });

  
    btnCerrarModal.addEventListener("click", function () {
        ocultarModal();
    });

    //realizamos click fuera del modal y podemos cerrarlo
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            ocultarModal();
        }
    });


    function ocultarModal() {
        modal.style.display = "none";
        modal.classList.remove("show");
    }


    function gestionarMensaje(texto, color) {
        if (mensajeSistema) {
            mensajeSistema.style.color = color;
            mensajeSistema.innerText = texto;

            
            setTimeout(function () {
                mensajeSistema.innerText = "";
            }, 2500);
        }
    }


    cargarProfesores();
});