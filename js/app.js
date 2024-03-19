//Variables
const
    carrito = document.querySelector('#carrito'),
    contenedorCarrito = document.querySelector('#lista-carrito tbody'),
    vaciarCarrito = document.querySelector('#vaciar-carrito'),
    listaProductos = document.querySelector('#lista-productos')
    ;

let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //cuando agregar un curso presionando "Agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);
}

//Funciones
function agregarProducto(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);

    }
}

//Leer el contenido del html al que le dimos click y extrae la información del curso
function leerDatosProducto(producto) {

    //Crear un objeto conb el contenido del curso actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h6').textContent,
        precio: producto.querySelector('.card-precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    /* Agregar elementos al arreglo del carrito */
    articulosCarrito = [...articulosCarrito, infoProducto];

    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML() {
    //Limpiar html
    limpiarHTML();

    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" class="producto-imagen">
        </td>

        <td class="producto-titulo"> 
            ${titulo}
        </td>

        <td  class="producto-precio">
            ${precio}
        </td>

        <td class="producto-cantidad">
            ${cantidad}
        </td>

        <td>
            <a href="#" class="text-decoration-none" data-id="${id}"> ❌ </>
        </td>

        `;

        //Agregar html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody
function limpiarHTML() {
    /* forma lenta
    contenedorCarrito.innerHTML = ''; */

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}