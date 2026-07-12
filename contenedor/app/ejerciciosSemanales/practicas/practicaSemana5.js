// ---Funciones globales para la calculadora ---
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { return b === 0 ? "Error" : a / b; }

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. CONTROL DE LA CALCULADORA
    // ==========================================
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const txtResultado = document.getElementById("resultadoCalc");

    function ejecutarOperacion(operacionFn, signo) {
        const val1 = parseFloat(input1.value) || 0;
        const val2 = parseFloat(input2.value) || 0;
        const res = operacionFn(val1, val2);
        
        // Muestra el resultado en el HTML
        txtResultado.innerText = res;
        // Imprime en consola tal cual se ve en tu captura
        console.log(`${operacionFn.name.toUpperCase() === 'MULTIPLICAR' ? 'Multiplicando' : 'Operacion'}: ${val1} ${signo} ${val2} = ${res}`);
    }

    document.getElementById("btnSumar")?.addEventListener("click", () => ejecutarOperacion(sumar, "+"));
    document.getElementById("btnRestar")?.addEventListener("click", () => ejecutarOperacion(restar, "-"));
    document.getElementById("btnMultiplicar")?.addEventListener("click", () => ejecutarOperacion(multiplicar, "*"));
    document.getElementById("btnDividir")?.addEventListener("click", () => ejecutarOperacion(dividir, "/"));


    // ==========================================
    // 2. CONTROL DEL CONTADOR (Inicia en 10 en tu ejemplo)
    // ==========================================
    let cuenta = 0; 
    const lblContador = document.getElementById("valorContador");
    const btnContar = document.getElementById("btnContar");

    btnContar?.addEventListener("click", () => {
        cuenta++;
        if (lblContador) {
            lblContador.innerText = cuenta;
        }
        console.log(`Contador: ${cuenta}`);
    });


    // ==========================================
    // 3. EVENTOS DE IMAGEN (Pug <-> Hámster)
    // ==========================================
    const imgElement = document.getElementById("imagenDinamica");
    const btnCambiarImg = document.getElementById("btnCambiarImagen");

    // URLs de prueba estables (Un perro Pug y un Hámster)
    const urlPug = "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0314%2Fr1144381_1295x729_16%2D9.jpg";
    const urlHamster = "https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6GGCWQRWY5E5XC75M77LLKDYP4.jpeg"; // Puedes usar tu ruta local './images/hamster.jpg'

    // Click: Cambia a la otra imagen (Hámster)
    btnCambiarImg?.addEventListener("click", () => {
        if (imgElement) {
            imgElement.src = urlHamster;
            imgElement.alt = "Copa del mundo y el balon";
            console.log("Imagen cambiada");
        }
    });

    // Mouseover / Mouseenter: Al pasar el mouse encima vuelve a la original (Pug)
    imgElement?.addEventListener("mouseenter", () => {
        imgElement.src = urlPug;
        imgElement.alt = "Mundial";
        console.log("Mouse sobre la imagen");
    });

});