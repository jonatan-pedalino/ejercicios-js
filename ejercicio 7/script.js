document.getElementById("formulario").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener la puntuación de la película desde el campo de entrada
    var puntuacion = parseInt(document.getElementById("puntuacion").value);

    // Definir la clasificación de la película según la puntuación
    var clasificacion;
    switch (puntuacion) {
        case 0:
            clasificacion = "Mala";
            break;
        case 1:
            clasificacion = "Regular";
            break;
        case 2:
            clasificacion = "Buena";
            break;
        case 3:
            clasificacion = "Muy buena";
            break;
        case 4:
            clasificacion = "Excelente";
            break;
        default:
            clasificacion = "Valor no válido";
            break;
    }

    // Mostrar la clasificación de la película
    console.log("La clasificación de la película es " + clasificacion);
    // Restablecer el valor del campo de entrada a cero
    document.getElementById("puntuacion").value = 0;
});