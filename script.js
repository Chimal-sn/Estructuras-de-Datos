const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
    }
}

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
    }
}

const mostrarLista = () => {
    for(const producto of listaDeCompras){
        console.log(producto);
    }
}
