document.addEventListener('DOMContentLoaded', () => {
    const alturaInput = document.getElementById('alturaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const resultado = document.getElementById('resultado');
    let alturas = [];

    agregarBtn.addEventListener('click', () => {
        let entrada = alturaInput.value;
        let altura = parseFloat(entrada);

        if (isNaN(altura) || altura <= 0) {
            if (altura === -1) {
                calcularPromedio();
                alturaInput.value = '';
                alturaInput.disabled = true;
                agregarBtn.disabled = true;
            } else {
                alert("Por favor, ingrese una altura válida mayor que 0.");
            }
            alturaInput.value = '';
            return;
        }

        alturas.push(altura);
        alturaInput.value = '';
        alturaInput.focus();
    });

    function calcularPromedio() {
        if (alturas.length === 0) {
            resultado.textContent = "No se ingresaron alturas.";
            return;
        }
        let suma = alturas.reduce((acc, alt) => acc + alt, 0);
        let promedio = suma / alturas.length;
        resultado.textContent = `El promedio de las alturas ingresadas es: ${promedio.toFixed(2)} cm`;
    }
});