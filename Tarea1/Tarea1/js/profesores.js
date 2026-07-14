/**
 * LÓGICA DE INTERFAZ: profesores.js
 * Captura clics en las tarjetas de PHP, realiza la consulta asíncrona al endpoint 
 * y despliega los detalles en el modal usando tus estilos personalizados.
 */
document.addEventListener("DOMContentLoaded", function () {

    // Identificadores del DOM originales de tu proyecto
    let contenedorProfesores = document.getElementById("contenedor-profesores");
    let modal = document.getElementById("modalProfesor");
    let cuerpoModal = document.getElementById("modal-cuerpo-detalle");
    let btnCerrarModal = document.getElementById("btnCerrarModal");
    let mensajeSistema = document.getElementById("mensaje-sistema");

    if (!contenedorProfesores) return;

    // Se define el evento de hacer click en el contenedor de tarjetas de PHP
    contenedorProfesores.addEventListener("click", function (event) {
       
        let tarjetaSeleccionada = event.target.closest(".profesor");
        
        if (tarjetaSeleccionada) {
            // Recuperamos el ID mediante el data-attribute inyectado por PHP
            let idABuscar = tarjetaSeleccionada.dataset.idProfesor;

            // RÚBRICA: Consulta asíncrona usando la URL obligatoria
            fetch(`index.php?controller=profesores&action=show&id=${idABuscar}`)
                .then(response => {
                    if (!response.ok) throw new Error("Error en la respuesta del servidor");
                    return response.json();
                })
                .then(profesorEncontrado => {
                    if (profesorEncontrado) {
                        
                        // NOTA: Como la tabla maneja el campo "bio", mapeamos tu antigua propiedad .descripcion a profesorEncontrado.bio
                        cuerpoModal.innerHTML = `
                            <div style="text-align: center; margin-bottom: 15px;">
                                <img src="${profesorEncontrado.foto}" style="max-width: 130px; border-radius: 50%;" alt="${profesorEncontrado.nombre}">
                            </div>
                            <h4>${profesorEncontrado.nombre}</h4>
                            <p><strong>Especialidad:</strong> ${profesorEncontrado.especialidad}</p>
                            <p><strong>Descripción:</strong> ${profesorEncontrado.bio}</p>
                            <p><strong>Estado del Profesor:</strong> ${profesorEncontrado.estado}</p>
                        `;

                        // Tu lógica original para abrir el modal aplicando tus clases CSS
                        modal.style.display = "block";
                        modal.classList.add("show");
                        
                    } else {
                        gestionarMensaje("Error: No se encontró información del profesor.", "red");
                    }
                })
                .catch(error => {
                    console.error("Error Fetch:", error);
                    gestionarMensaje("Error de comunicación con la Base de Datos.", "red");
                });
        }
    });

    // Tu lógica original de cierre
    btnCerrarModal.addEventListener("click", function () {
        ocultarModal();
    });

    // Realizamos click fuera del modal y podemos cerrarlo
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            ocultarModal();
        }
    });

    function ocultarModal() {
        modal.style.display = "none";
        modal.classList.remove("show");
    }

    // Tu función original de notificaciones en el DOM
    function gestionarMensaje(texto, color) {
        if (mensajeSistema) {
            mensajeSistema.style.color = color;
            mensajeSistema.innerText = texto;

            setTimeout(function () {
                mensajeSistema.innerText = "";
            }, 2500);
        }
    }
});