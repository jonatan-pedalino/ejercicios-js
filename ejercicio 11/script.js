function main() {
    // Inicializamos un array vacío para guardar los números
    let numeros = [];
    
    while (true) {
        // Pedimos al usuario que ingrese un número
        let entrada = prompt("Ingrese un número (-1 para terminar):");
        
        // Intentamos convertir la entrada a un número entero
        let numero = parseInt(entrada);
        
        // Si el número ingresado no es un número válido, mostramos un mensaje y continuamos
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            continue;
        }
        
        // Si el número ingresado es -1, rompemos el ciclo
        if (numero === -1) {
            break;
        }
        
        // Agregamos el número al array
        numeros.push(numero);
    }
    
    // Imprimimos los números junto con sus posiciones
    console.log("Números ingresados y sus posiciones:");
    numeros.forEach((num, i) => {
        console.log(`Posición ${i}: ${num}`);
    });
}

// Ejecutamos la función principal
main();