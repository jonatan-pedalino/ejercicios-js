document.addEventListener('DOMContentLoaded', () => {
    const nombreProductoInput = document.getElementById('nombreProducto');
    const precioProductoInput = document.getElementById('precioProducto');
    const agregarBtn = document.getElementById('agregarBtn');
    const listaProductos = document.getElementById('listaProductos');
    let productos = [];
    const maxProductos = 5;

    agregarBtn.addEventListener('click', () => {
        let nombreProducto = nombreProductoInput.value.trim();
        let precioProducto = parseFloat(precioProductoInput.value);

        if (nombreProducto === '' || isNaN(precioProducto) || precioProducto <= 0) {
            alert("Por favor, ingrese un nombre de producto válido y un precio válido mayor que 0.");
            return;
        }

        productos.push({ nombre: nombreProducto, precio: precioProducto });

        nombreProductoInput.value = '';
        precioProductoInput.value = '';

        if (productos.length === maxProductos) {
            mostrarProductos();
            nombreProductoInput.disabled = true;
            precioProductoInput.disabled = true;
            agregarBtn.disabled = true;
        }
    });

    function mostrarProductos() {
        listaProductos.innerHTML = '';
        productos.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = `Producto ${index + 1}: ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;
            listaProductos.appendChild(li);
        });
    }
});