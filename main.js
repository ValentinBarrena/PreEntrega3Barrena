//Lista de productos: 
    const productos = [
        {id: 0, nombre: 'Arroz', precio: 75, cantidad: 1},
        {id: 1, nombre: 'Carne', precio: 150, cantidad: 1},
        {id: 2, nombre: 'Fideos', precio: 80, cantidad: 1},
        {id: 3, nombre: 'Pollo', precio: 120, cantidad: 1},
        {id: 4, nombre: 'Pescado', precio: 135, cantidad: 1},
        {id: 5, nombre: 'Medialunas', precio: 25, cantidad: 1},
        {id: 6, nombre: 'Churros', precio: 15, cantidad: 1},
        {id: 7, nombre: 'Lentejas', precio: 50, cantidad: 1},
        {id: 8, nombre: 'Polenta', precio: 65, cantidad: 1},
        {id: 9, nombre: 'Huevos', precio: 10, cantidad: 1},
    ]
    const carrito = []
//Ordeno los productos en un div
    for (const producto of productos) {
        let container = document.createElement("div");
        container.innerHTML = `
                <h2>Nombre del producto: ${producto.nombre}</h2>
                <h3>ID del producto: ${producto.id}</h3>
                <h3>Precio: $${producto.precio}</h3>
                <button id="${producto.id}" class="btn">Agregar al carrito</button>
                `;
        container.style.border = "3px solid black";
        container.style.padding = "15px";
        container.style.margin = "15px";
        document.body.appendChild(container);
        }   
//Agrego el find para el producto seleccionado y un console log para el mismo
        let btns = document.getElementsByClassName('btn')
        for (const boton of btns) {
            boton.onclick = (e) => {
                let productoElegido = productos.find((producto) => producto.id === parseInt(e.target.id)) 
                console.log(`se agrego el producto ${productoElegido.nombre} al carrito`)
                carrito.push(productoElegido)
            }}
//Creo el btn para finalizar compra 
            let btnFinalizarCompra = document.createElement('button')
            btnFinalizarCompra.innerText = 'Finalizar Compra'
            btnFinalizarCompra.style.border = "3px solid black"
            btnFinalizarCompra.style.padding  = "5px"
            btnFinalizarCompra.style.margin = "5px" 
            btnFinalizarCompra.onclick = () => {
                console.log(`Se guardo el elemento con ${carrito.length} unidades de productos`)
//Guardo los elementos del carrito en el localStorage
                localStorage.setItem('carrito', JSON.stringify(carrito))}
            document.body.appendChild(btnFinalizarCompra)
//Creo un boton para mostrar lo que contiene el carrito
            let btnMostrarCarrito = document.createElement('button')
            btnMostrarCarrito.innerText = 'Mostrar Carrito'
            btnMostrarCarrito.style.border = "3px solid black"
            btnMostrarCarrito.style.padding  = "5px"
            btnMostrarCarrito.style.margin = "5px" 
            btnMostrarCarrito.onclick = () => {
                if (carrito.length > 0){
                const carritoDentroLocalStorage = JSON.parse(localStorage.getItem('carrito'))
                const nombreProductos = carritoDentroLocalStorage.map((producto) => producto.nombre)
                console.log(`Los productos agregados al carrito son: ${nombreProductos}`)}
                else {
                    console.log('El carrito esta vacio')
                }
            }
            document.body.appendChild(btnMostrarCarrito)
//Creo un boton para limpiar carrito
            let btnLimpiarCarrito = document.createElement('button')
            btnLimpiarCarrito.innerText = 'Limpiar Carrito'
            btnLimpiarCarrito.style.border = "3px solid black"
            btnLimpiarCarrito.style.padding  = "5px"
            btnLimpiarCarrito.style.margin = "5px" 
            btnLimpiarCarrito.onclick = () => {
                localStorage.clear()
                carrito.splice(0, carrito.length)
                console.log(`Carrito limpiado exitosamente`)
            }
            document.body.appendChild(btnLimpiarCarrito)


