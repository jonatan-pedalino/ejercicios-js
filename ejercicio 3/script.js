document.getElementById("formulario").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de las notas desde los campos de entrada
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);

// Comparar las notas e imprimir el resultado
if (!isNaN(nota1) && !isNaN(nota2)) {
    if (nota1 > nota2) {
        alert("La Nota 1 es mayor que la Nota 2.");
    } else if (nota1 < nota2) {
        alert("La Nota 2 es mayor que la Nota 1.");
    } else {
        alert("Ambas notas son iguales.");
    }
} else {
    alert("Por favor, ingresa valores numéricos en ambos campos.");
}
});