const menu = [
  { nombre: 'Bruschetta Clásica',     descripcion: 'Pan tostado con tomate y albahaca fresca',    precio: 4500,  categoria: 'Entrada'      },
  { nombre: 'Tabla de Quesos',         descripcion: 'Selección de quesos importados con mermelada', precio: 7800,  categoria: 'Entrada'      },
  { nombre: 'Lomo al Vino Tinto',      descripcion: 'Lomo de res en reducción de vino tinto',       precio: 15500, categoria: 'Plato Fuerte' },
  { nombre: 'Pasta Carbonara',         descripcion: 'Pasta con tocino, huevo y queso parmesano',    precio: 10200, categoria: 'Plato Fuerte' },
  { nombre: 'Salmón a la Plancha',     descripcion: 'Filete de salmón con vegetales al vapor',      precio: 13800, categoria: 'Plato Fuerte' },
  { nombre: 'Tiramisú',               descripcion: 'Postre italiano con café y mascarpone',          precio: 5200,  categoria: 'Postre'       },
  { nombre: 'Cheesecake de Maracuyá', descripcion: 'Cheesecake cremoso con coulis de maracuyá',    precio: 4800,  categoria: 'Postre'       },
];

const reservas = [];


function renderMenu() {
  const contenedor = document.getElementById('contenedor-menu');
  contenedor.innerHTML = ''; // Limpiar contenedor previo

  menu.forEach(function (plato) {
    //Estructura de columna Bootstrap
    const col = document.createElement('div');
    col.className = 'col-md-6';

    //Contenedor principal de la tarjeta
    const card = document.createElement('article');
    card.className = 'card-plato';

    //Seccion superior de datos
    const topDiv = document.createElement('div');

    const titulo = document.createElement('h3');
    titulo.innerText = plato.nombre;

    const categoriaTag = document.createElement('span');
    categoriaTag.className = 'categoria';
    categoriaTag.innerText = plato.categoria;

    const descripcion = document.createElement('p');
    descripcion.innerText = plato.descripcion;

    topDiv.appendChild(categoriaTag);
    topDiv.appendChild(titulo);
    topDiv.appendChild(descripcion);

    //Precio formateado en colones costarricenses
    const precio = document.createElement('div');
    precio.className = 'precio';
    precio.innerText = '₡' + plato.precio.toLocaleString('es-CR');

    //Ensamblar la tarjeta
    card.appendChild(topDiv);
    card.appendChild(precio);
    col.appendChild(card);
    contenedor.appendChild(col);
  });


}


function filtrarCategoria(categoria) {
  //Manejo de clases visuales en los botones de filtro
  const botones = document.querySelectorAll('.btn-filtro');
  botones.forEach(function (btn) {
    btn.classList.remove('activo');
  });

  //Marcar boton activo segun el identificador
  let idBoton = 'btn-' + categoria.replace(' ', '');
  const botonActivo = document.getElementById(idBoton);
  if (botonActivo) {
    botonActivo.classList.add('activo');
  }

  // Filtrar en el DOM las tarjetas correspondientes
  const contenedor = document.getElementById('contenedor-menu');
  contenedor.innerHTML = '';

  menu.forEach(function (plato) {
    if (categoria === 'Todos' || plato.categoria === categoria) {
      const col = document.createElement('div');
      col.className = 'col-md-6';

      const card = document.createElement('article');
      card.className = 'card-plato';

      const topDiv = document.createElement('div');
      const titulo = document.createElement('h3');
      titulo.innerText = plato.nombre;

      const categoriaTag = document.createElement('span');
      categoriaTag.className = 'categoria';
      categoriaTag.innerText = plato.categoria;

      const descripcion = document.createElement('p');
      descripcion.innerText = plato.descripcion;

      topDiv.appendChild(categoriaTag);
      topDiv.appendChild(titulo);
      topDiv.appendChild(descripcion);

      const precio = document.createElement('div');
      precio.className = 'precio';
      precio.innerText = '₡' + plato.precio.toLocaleString('es-CR');

      card.appendChild(topDiv);
      card.appendChild(precio);
      col.appendChild(card);
      contenedor.appendChild(col);
    }
  });

}

function validarFormulario() {
  let formularioValido = true;

  //Validacion de Nombre Completo
  const nombreInput = document.getElementById('nombre').value.trim();
  const errorNombre = document.getElementById('error-nombre');
  const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  if (nombreInput === '') {
    errorNombre.innerText = 'El nombre completo es obligatorio.';
    formularioValido = false;
  } else if (nombreInput.length < 5) {
    errorNombre.innerText = 'Debe tener un mínimo de 5 caracteres.';
    formularioValido = false;
  } else if (!regexNombre.test(nombreInput)) {
    errorNombre.innerText = 'Solo se permiten letras y espacios.';
    formularioValido = false;
  } else {
    errorNombre.innerText = '';
  }

  //Validacion de Correo Electronico
  const correoInput = document.getElementById('correo').value.trim();
  const errorCorreo = document.getElementById('error-correo');
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (correoInput === '') {
    errorCorreo.innerText = 'El correo electrónico es obligatorio.';
    formularioValido = false;
  } else if (!regexCorreo.test(correoInput)) {
    errorCorreo.innerText = 'Ingrese un formato de correo válido.';
    formularioValido = false;
  } else {
    errorCorreo.innerText = '';
  }

  //Validacion de Fecha
  const fechaInput = document.getElementById('fecha').value;
  const errorFecha = document.getElementById('error-fecha');
  
  if (fechaInput === '') {
    errorFecha.innerText = 'La fecha de reserva es obligatoria.';
    formularioValido = false;
  } else {
    const fechaSeleccionada = new Date(fechaInput + 'T00:00:00');
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < fechaActual) {
      errorFecha.innerText = 'La fecha no puede ser una fecha pasada.';
      formularioValido = false;
    } else {
      errorFecha.innerText = '';
    }
  }

  //Validacion de Numero de Personas
  const personasInput = document.getElementById('personas').value;
  const errorPersonas = document.getElementById('error-personas');
  const numPersonas = parseInt(personasInput, 10);

  if (personasInput === '') {
    errorPersonas.innerText = 'El número de personas es obligatorio.';
    formularioValido = false;
  } else if (isNaN(numPersonas) || numPersonas < 1 || numPersonas > 20) {
    errorPersonas.innerText = 'Debe ser un número entero entre 1 y 20.';
    formularioValido = false;
  } else {
    errorPersonas.innerText = '';
  }

  //Control de estado del boton submit del formulario
  const btnSubmit = document.getElementById('btn-submit');
  if (formularioValido) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', 'true');
  }

  return formularioValido;

}

function agregarReserva() {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const personas = parseInt(document.getElementById('personas').value, 10);

  //Crear objeto de reserva limpia
  const nuevaReserva = {
    nombre: nombre,
    correo: correo,
    fecha: fecha,
    hora: hora,
    personas: personas
  };

  //Guarda el arreglo
  reservas.push(nuevaReserva);

  //Construir fila en la tabla
  const tablaBody = document.getElementById('tabla-reservas-body');
  const fila = document.createElement('tr');
  
  //Asignacion obligatoria de clase CSS basica
  fila.className = 'fila-reserva';

  //Aplicar estilo condicional si asisten 6 o mas personas
  if (personas >= 6) {
    fila.classList.add('vip-highlight');
  }

  //Creacion explicita de celdas
  const tdNombre = document.createElement('td');
  tdNombre.innerText = nuevaReserva.nombre;

  const tdCorreo = document.createElement('td');
  tdCorreo.innerText = nuevaReserva.correo;

  const tdFecha = document.createElement('td');
  tdFecha.innerText = nuevaReserva.fecha;

  const tdHora = document.createElement('td');
  tdHora.innerText = nuevaReserva.hora;

  const tdPersonas = document.createElement('td');
  tdPersonas.innerText = nuevaReserva.personas;

  fila.appendChild(tdNombre);
  fila.appendChild(tdCorreo);
  fila.appendChild(tdFecha);
  fila.appendChild(tdHora);
  fila.appendChild(tdPersonas);

  tablaBody.appendChild(fila);

  //Limpiar formulario y reestablecer validaciones de control
  document.getElementById('form-reserva').reset();
  validarFormulario();

}


function actualizarResumen() {
  const contenedorResumen = document.getElementById('resumen');
  contenedorResumen.innerHTML = ''; //Limpieza

  let totalReservas = reservas.length;
  let totalPersonas = 0;
  let maxPersonas = 0;
  let nombreMaxReserva = 'Ninguna';

  reservas.forEach(function (res) {
    totalPersonas += res.personas;
    if (res.personas > maxPersonas) {
      maxPersonas = res.personas;
      nombreMaxReserva = res.nombre + ' (' + res.personas + ' personas)';
    }
  });

  //Generar nodos de resumen textual estructurado
  const pTotal = document.createElement('p');
  pTotal.innerText = 'Total de reservas registradas: ' + totalReservas;

  const pPersonas = document.createElement('p');
  pPersonas.innerText = 'Total de personas esperadas: ' + totalPersonas;

  const pMax = document.createElement('p');
  pMax.innerText = 'Reserva con mayor número de personas: ' + nombreMaxReserva;

  contenedorResumen.appendChild(pTotal);
  contenedorResumen.appendChild(pPersonas);
  contenedorResumen.appendChild(pMax);

}


document.addEventListener('DOMContentLoaded', function () {
  renderMenu();
  actualizarResumen();

  document.getElementById('nombre').addEventListener('input', validarFormulario);
  document.getElementById('correo').addEventListener('input', validarFormulario);
  document.getElementById('fecha').addEventListener('input', validarFormulario);
  document.getElementById('personas').addEventListener('input', validarFormulario);

});


document.getElementById('form-reserva').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recarga de página

  if (validarFormulario()) {
    agregarReserva();
    actualizarResumen();
  }

});
