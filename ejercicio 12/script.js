document.addEventListener('DOMContentLoaded', () => {
    const numeroInput = document.getElementById('numeroInput');
    const ingresarBtn = document.getElementById('ingresarBtn');
    const resultado = document.getElementById('resultado');
    let numeros = [];

    ingresarBtn.addEventListener('click', () => {
        let entrada = numeroInput.value;
        let numero = parseInt(entrada);

        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
            numeroInput.value = '';
            return;
        }

        if (numero === -1) {
            calcularPromedio();
            numeroInput.value = '';
            numeroInput.disabled = true;
            ingresarBtn.disabled = true;
            return;
        }

        numeros.push(numero);
        numeroInput.value = '';
        numeroInput.focus();
    });

    function calcularPromedio() {
        if (numeros.length === 0) {
            resultado.textContent = "No se ingresaron números.";
            return;
        }
        let suma = numeros.reduce((acc, num) => acc + num, 0);
        let promedio = suma / numeros.length;
        resultado.textContent = `El promedio de los números ingresados es: ${promedio.toFixed(2)}`;
    }
});