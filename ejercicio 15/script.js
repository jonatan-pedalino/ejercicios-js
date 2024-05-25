
document.addEventListener('DOMContentLoaded', () => {
    const numeroInput = document.getElementById('numeroInput');
    const mostrarSignificadoBtn = document.getElementById('mostrarSignificadoBtn');
    const resultado = document.getElementById('resultado');

    const significados = [
        "Huevos", "Agua", "Niño", "San Cono", "La Papa", "La Niña Bonita", 
        "Revólver", "El Loco", "El Anillo", "El Cañón", "El Minero", "El Soldado", 
        "El Pescado", "La Yeta", "El Borracho", "La Niña Bonita", "El Anillo", 
        "La Sangre", "El Perro", "El Gato", "La Tortuga", "El Pájaro", 
        "El León", "El Caballo", "La Rata", "La Gata"
    ];

    function mostrarSignificado() {
        let numero = parseInt(numeroInput.value);

        if (isNaN(numero) || numero < 0 || numero > 25) {
            resultado.textContent = "Por favor, ingrese un número válido entre 0 y 25.";
            return;
        }

        resultado.textContent = `El significado de ${numero} en el bingo es: "${significados[numero]}"`;
        numeroInput.value = ''; // Reinicia el campo de entrada
        numeroInput.focus(); // Coloca el foco en el campo de entrada
    }

    mostrarSignificadoBtn.addEventListener('click', mostrarSignificado);

    numeroInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            mostrarSignificado();
        }
    });
});