const containerProducts = document.getElementById('container-products');
const modal = document.getElementById('ventana-modal');
const carrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total');
const btnClose = document.getElementsByClassName('close')[0];
const containerCart = document.querySelector('.modal-body');
const iconMenu = document.getElementById('icon-menu');
const contenedorProductos = document.querySelector('.contenedor-carrito');
const cantidadProductos = document.querySelector('.count-products');
const finalizarCompra = document.querySelector('#finalizar-compra');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const inputFiltar = document.querySelector('#input-filtro');
const btnFiltro = document.querySelector('#filtro');
let productosCarrito = [];

MostrarProductos();

function MostrarProductos() {
    document.addEventListener('DOMContentLoaded', () => {
            renderizarProductos();
    })
}


function renderizarProductos() {
    // // Llamar a la función y pasarle la URL de la API que deseas consultar
    // // const productos = await realizarPeticion(url);
    // const productos = await realizarPeticion(file);
    // // console.log(productos);

    // // recorrerArray(productos);

    productos.forEach((producto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('card','col-sm-3', 'text-center', 'py-5', 'm-2');
        divCard.innerHTML += `
    		<img src="../public/img/${producto.imagen}" alt="${producto.nombre}" />
    		<h4>${producto.nombre}</h4>
    		<p>$${producto.precio}</p>
    		<a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
        `;

        containerProducts.appendChild(divCard);
    });
}