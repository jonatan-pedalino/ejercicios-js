document.getElementById("formulario").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener el monto de la compra desde el campo de entrada
    var montoCompra = parseFloat(document.getElementById("montoCompra").value);

    // Calcular el descuento y el monto final a pagar
    var descuento = 0;
    var montoFinal = montoCompra;
    if (montoCompra > 100) {
        descuento = montoCompra * 0.15; // 15% de descuento
        montoFinal = montoCompra - descuento;
    }

    // Mostrar el monto final a pagar
    alert("El monto a pagar es: $" + montoFinal.toFixed(2));
     // Restablecer el valor del campo de entrada a cero
     document.getElementById("montoCompra").value = 0;
});