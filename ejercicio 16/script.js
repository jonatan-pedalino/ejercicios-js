// Vector de nombres
const nombres = [
    "Juan",
    "María",
    "Pedro",
    "Laura",
    "Diego",
    "Ana",
    "Carlos",
    "Sofía",
    "Luis",
    "Lucía"
];

// Vector de apellidos
const apellidos = [
    "Gómez",
    "Pérez",
    "Rodríguez",
    "González",
    "Martínez",
    "López",
    "Díaz",
    "Hernández",
    "García",
    "Fernández"
];

// Mostrar los nombres y apellidos de los compañeros
console.log("Compañeros del curso de Fullstack de Codo a Codo:");
for (let i = 0; i < nombres.length; i++) {
    console.log(`${nombres[i]} ${apellidos[i]}`);
}