var intervalo;
var contador = 59;
var contadorInicial = contador; // Almacenar el valor inicial del contador

document.getElementById("botonInicio").addEventListener("click", function() {
    // Iniciar el intervalo si no está activo
    if (!intervalo) {
        // Iniciar el intervalo para decrementar el contador cada segundo
        intervalo = setInterval(function() {
            contador--;
            // Mostrar el contador actualizado
            document.getElementById("contador").textContent = contador;
            // Detener el intervalo cuando el contador llega a 0
            if (contador === 0) {
                clearInterval(intervalo);
            }
        }, 1000);
    }
});

document.getElementById("botonParar").addEventListener("click", function() {
    // Detener el intervalo si está activo
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;
    }
});

document.getElementById("botonReiniciar").addEventListener("click", function() {
    // Reiniciar el contador al valor inicial
    contador = contadorInicial;
    // Mostrar el contador reiniciado
    document.getElementById("contador").textContent = contador;
});