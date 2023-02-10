const producto = []
let cantidadDeProductos = 0;
    cantidadDeProductos= parseFloat(cantidadDeProductos)
let sumar; 
    
// Ve si hay productos en el localStorage y los agrega al carrito
if ( localStorage.getItem("articulosCarrito")) {
    const productosPersistentes = JSON.parse(localStorage.getItem("articulosCarrito"));
    for ( let i = 0; i < productosPersistentes.length; i++){
    producto.push(productosPersistentes[i]);
  
  }}

  // agrega la cantidad de productos a la bolsita en el header
  for ( let i = 0; i < producto.length; i++){
        sumar = producto[i].cantidad;
        sumar = parseInt(sumar);
        cantidadDeProductos = cantidadDeProductos + sumar;
  }   
  cantidadProductos.innerHTML = cantidadDeProductos;