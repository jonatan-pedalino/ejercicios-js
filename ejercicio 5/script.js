document.getElementById("formulario").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener el número de personas en el grupo desde el campo de entrada
    var numeroPersonas = parseInt(document.getElementById("numeroPersonas").value);

    // Calcular el pago por persona y el pago total del grupo
    var pagoPorPersona;
    var pagoTotal;
    if (numeroPersonas < 8) {
        pagoPorPersona = 1.5;
    } else {
        pagoPorPersona = 0.5;
    }
    pagoTotal = numeroPersonas * pagoPorPersona;

    // Mostrar el resultado
    alert("El pago por persona es: $" + pagoPorPersona.toFixed(2) + "\nEl pago total del grupo es: $" + pagoTotal.toFixed(2));
    document.getElementById("numeroPersonas").value = 0;
});