document.getElementById("btnPares").addEventListener("click", function() {
    limpiarConsola();
    mostrarNumeros("pares");
});

document.getElementById("btnImpares").addEventListener("click", function() {
    limpiarConsola();
    mostrarNumeros("impares");
});

function limpiarConsola() {
    console.clear(); // Limpiar la consola del navegador
}

function mostrarNumeros(tipo) {
    console.log(`Números ${tipo}:`);

    var inicio = tipo === "pares" ? 2 : 1;
    var paso = tipo === "pares" ? 2 : 2;

    for (var i = inicio; i <= 20; i += paso) {
        console.log(i);
    }
}