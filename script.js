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


agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Leche");
mostrarLista();


console.log("Eliminado pan");
eliminarProducto("Pan");
mostrarLista();

console.log("Agregando sandia y naranja");
agregarProducto("Sandia");
agregarProducto("Naranja");
mostrarLista();
