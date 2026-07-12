//Recorrer el arreglo y mostrar en mayúscula
const nombres = ["ana", "luis", "karol"];

nombres.forEach(nombre => {
    console.log(nombre.toUpperCase());
});


//Suma del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("La suma del 1 al 100 es:", suma);


//Tabla de multiplicar del 5
const tabla = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tabla, 'x', i,  "=", tabla * i);
}

//Cálculo de descuento por compra
let compra = 120000; // Podés cambiar este valor para probar los escenarios
let mensaDescuento = "";

if (compra > 100000) {
    mensaDescuento = "Tiene un 10%"; // 10% de descuento
} else if (compra > 50000) {
    mensaDescuento = "Tiene un 5%"; // 5% de descuento
} else {
    mensaDescuento = "No tiene descuento";    // Sin descuento
}

console.log("Compra:", compra);
console.log("Descuento", mensaDescuento);

//Día de la semana según el número (1 al 7)
let numeroDia = 5; // Modifica este valor para probar (1 al 7)
let diaSemana = "";

switch (numeroDia) {
    case 1:
        diaSemana = "Lunes";
        break;
    case 2:
        diaSemana = "Martes";
        break;
    case 3:
        diaSemana = "Miercoles";
        break;
    case 4:
        diaSemana = "Jueves";
        break;
    case 5:
        diaSemana = "Viernes";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
    case 7:
        diaSemana = "Domingo";
        break;
    default:
        diaSemana = "Día no válido (Debe ser del 1 al 7)";
        break;
}

console.log("Valor:", numeroDia, "Salida:", diaSemana);