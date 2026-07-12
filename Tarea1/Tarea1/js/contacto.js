/*document.addEventListener("DOMContentLoaded", function () {

    // elementos del formulario
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");
    const botonEnviar = form.querySelector("button[type='submit']");

    const mensajeSistema = document.createElement("p");
    mensajeSistema.id = "mensaje-sistema";
    form.insertAdjacentElement("afterend", mensajeSistema);

    // parrafo de error debajo de cada campo
    function crearError(input) {
        const error = document.createElement("p");
        error.classList.add("error");
        input.insertAdjacentElement("afterend", error);
        return error;
    }

    const errorNombre = crearError(nombre);
    const errorCorreo = crearError(correo);
    const errorTelefono = crearError(telefono);
    const errorAsunto = crearError(asunto);
    const errorMensaje = crearError(mensaje);

    // minimo 5 caracteres, solo letras
    function validarNombre(mostrarError) {
        const valor = nombre.value.trim();
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

        if (valor.length < 5) {
            if (mostrarError) errorNombre.textContent = "El nombre debe tener al menos 5 caracteres.";
            return false;
        }

        if (!regex.test(valor)) {
            if (mostrarError) errorNombre.textContent = "El nombre solo puede contener letras y espacios.";
            return false;
        }

        if (mostrarError) errorNombre.textContent = "";
        return true;
    }

    // formato de correo con regex
    function validarCorreo(mostrarError) {
        const valor = correo.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(valor)) {
            if (mostrarError) errorCorreo.textContent = "Ingrese un correo electrónico válido.";
            return false;
        }

        if (mostrarError) errorCorreo.textContent = "";
        return true;
    }

    // solo numeros, minimo 8 digitos
    function validarTelefono(mostrarError) {
        const valor = telefono.value.trim();
        const regex = /^[0-9]{8,}$/;

        if (!regex.test(valor)) {
            if (mostrarError) errorTelefono.textContent = "El teléfono debe tener al menos 8 dígitos y solo números.";
            return false;
        }

        if (mostrarError) errorTelefono.textContent = "";
        return true;
    }

    function validarAsunto(mostrarError) {
        const valor = asunto.value.trim();

        if (valor.length < 3) {
            if (mostrarError) errorAsunto.textContent = "El asunto debe tener al menos 3 caracteres.";
            return false;
        }

        if (mostrarError) errorAsunto.textContent = "";
        return true;
    }

    function validarMensaje(mostrarError) {
        const valor = mensaje.value.trim();

        if (valor.length < 20) {
            if (mostrarError) errorMensaje.textContent = "El mensaje debe tener al menos 20 caracteres.";
            return false;
        }

        if (mostrarError) errorMensaje.textContent = "";
        return true;
    }

    function formularioCompletoValido() {
        return (
            validarNombre(false) &&
            validarCorreo(false) &&
            validarTelefono(false) &&
            validarAsunto(false) &&
            validarMensaje(false)
        );
    }

    // activar o desactivar boton enviar
    function actualizarBoton() {
        botonEnviar.disabled = !formularioCompletoValido();
    }

    function limpiarErrores() {
        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorTelefono.textContent = "";
        errorAsunto.textContent = "";
        errorMensaje.textContent = "";
    }

    // validar mientras el usuario escribe
    function registrarValidacionEnTiempoReal(input, validar) {
        input.addEventListener("input", function () {
            validar(true);
            actualizarBoton();
        });

        input.addEventListener("blur", function () {
            validar(true);
            actualizarBoton();
        });
    }

    registrarValidacionEnTiempoReal(nombre, validarNombre);
    registrarValidacionEnTiempoReal(correo, validarCorreo);
    registrarValidacionEnTiempoReal(telefono, validarTelefono);
    registrarValidacionEnTiempoReal(asunto, validarAsunto);
    registrarValidacionEnTiempoReal(mensaje, validarMensaje);

    botonEnviar.disabled = true;

    function mostrarMensajeExito(texto) {
        mensajeSistema.textContent = texto;
        mensajeSistema.className = "exito";

        setTimeout(function () {
            mensajeSistema.textContent = "";
            mensajeSistema.className = "";
        }, 4000);
    }

    // al enviar el formulario
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreOk = validarNombre(true);
        const correoOk = validarCorreo(true);
        const telefonoOk = validarTelefono(true);
        const asuntoOk = validarAsunto(true);
        const mensajeOk = validarMensaje(true);

        if (!nombreOk || !correoOk || !telefonoOk || !asuntoOk || !mensajeOk) {
            actualizarBoton();
            return;
        }

        mostrarMensajeExito("¡Mensaje enviado con éxito! Te contactaremos pronto.");

        form.reset();
        limpiarErrores();
        actualizarBoton();
    });

});*/
