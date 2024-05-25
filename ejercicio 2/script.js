
//console.log(document.getElementById("ejercicio2").textContent)
document.getElementById("ejercicio2").textContent 

let numeros = [15,20,10,10,20]

let sumaNumeros  = (a , b) => {
    return a + b
}

document.getElementById("ejercicio2").innerHTML = numeros.reduce(sumaNumeros);

let promedio = (a,b) => {
    let sumaPromedio = numeros.reduce(sumaNumeros) / 5

    return sumaPromedio
}

console.log("el promedio de los numeros es " + promedio())