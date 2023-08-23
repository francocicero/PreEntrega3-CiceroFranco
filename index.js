const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/09/20/16636980364237.png",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "https://snpi.dell.com/snp/images/products/large/es-ar~210-AUND/210-AUND_v1.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "https://pandashop.com.ar/wp-content/uploads/2021/07/disco-solido-interno-ssd-samsung-870-evo-mz-77e500-500gb-3.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "https://noticias.bidcom.com.ar/wp-content/uploads/2022/03/intel-core.jpg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-4151202.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "https://www.redinfo.com.ar/web/image/product.template/30015/image",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_627809-MLA51326771407_082022-O.webp",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_764190-MLA46825047568_072021-O.webp",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

console.log(productos)

const productosContainer = document.querySelector (".productos-container")

const tarjetasHtml = array => {

    const tarjetas = array.reduce ((acumulador, producto ) => {
        return acumulador + `
        <div class = "tarjeta" id = "tarjeta-${producto.id}">
            <h2 class = tituloh2>
                ${producto.producto}
            </h2>

            <div class = "contenedor-tarjeta">
                <img src = ${producto.imagen || "not-found.webp" }  alt = ${producto.producto}
            <div/>

            <button class = "boton-tarjeta" id = "producto ${producto.id}">
            AGREGAR AL CARRITO
            </button>

        <div/> 
    `
}, "")


productosContainer.innerHTML = tarjetas


}

tarjetasHtml(productos)

let productosFavoritos = []

const todasTarjetas = document.querySelectorAll(".boton-tarjeta")

const eventoTarjeta = (nodos, array) => {

    for (let i = 0; i < nodos.length; i++){

        nodos[i].onclick = (e) => {
            const id = e.currentTarget.id.slice(9)
            const buscarProducto = array.find(producto => producto.id === Number(id))
            productosFavoritos.push(buscarProducto)
            console.log(productosFavoritos)
            localStorage.setItem("productos", JSON.stringify(productosFavoritos))
            Toastify({
                text: `Agrego ${buscarProducto.producto} a favoritos`,
                className: "info",
                style: {
                    background: "linear-gradient(to right, rgb(68, 144, 165) )",
                }
            }).showToast();
        }
    }
}
//#00b09b, #96c93d
eventoTarjeta(todasTarjetas, productos)
