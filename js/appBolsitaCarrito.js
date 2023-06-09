const producto = []
let cantidadDeProductos = 0;
    cantidadDeProductos= parseFloat(cantidadDeProductos)
let sumar;
let importeTotal = parseFloat(localStorage.getItem('totalImporte'));
let m;


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

  function mostrarCarrito(){
    if ( producto.length === 0) {
      mostrarCarritoVacio()
    return;
  }
   
    document.getElementById('carritoContenedor').style.display="block"; 
    document.getElementById('carritoContenedor').style.borderRadius="5px";

    let htmlCarrito = ''
    htmlCarrito += `<div class="carrito-cuadro">`;
    htmlCarrito += `<p>TU COMPRA:</p>`;
    for (  m = 0; m < producto.length; m++) {     
          
         htmlCarrito += `<div class="titulos-carrito">`;
            htmlCarrito += `<div>Articulo</div>`;
            htmlCarrito += `<div>Marca</div>`;
            htmlCarrito += `<div>Numero</div>`;
         htmlCarrito += `</div>`;
         htmlCarrito += `<div class="mostrarResultado">`; 
            htmlCarrito += `<div>${producto[m].nArticulo}</div>`;
            htmlCarrito += `<div>${producto[m].marca}</div>`;
            htmlCarrito += `<div>${producto[m].numero}</div>`;
        htmlCarrito += `</div>`;

        htmlCarrito += `<div class="titulos-carrito">`;
            htmlCarrito += `<div>Color</div>`;
            htmlCarrito += `<div>Cantidad</div>`;
            htmlCarrito += `<div>Precio U.</div>`;
         htmlCarrito += `</div>`;          
         htmlCarrito += `<div class="mostrarResultado">`; 
            htmlCarrito += `<div>${producto[m].color}</div>`;
            htmlCarrito += `<div>${producto[m].cantidad}</div>`;
            htmlCarrito += `<div>${producto[m].precio}</div>`;
            htmlCarrito += `<div>`;
            htmlCarrito += `<button class="btn-mas" data-btnsuma="${m}">+</button>`;
            htmlCarrito += `<button class="btn-menos" data-btnresta="${m}">-</button>`;
            htmlCarrito += `<button class="btn-borrar-producto" data-btnborrar="${m}">BORRAR</button>`;
            htmlCarrito += `</div>`;
            htmlCarrito += `</div>`;
            htmlCarrito += `<hr>`
         
        
    }


/*          
          htmlCarrito += `<table border="1" cellspacing="0" cellpadding="7" class="tablaCarrito">` 
          htmlCarrito += `<tr>`        
              htmlCarrito += `<th>Art.</th>`
              htmlCarrito += `<th>Marca</th>`
              htmlCarrito += `<th>Nº</th>`
              htmlCarrito += `<th>Color</th>`
              htmlCarrito += `<th>Cant.</th>`
              htmlCarrito += `<th>Precio</th>`
          htmlCarrito += `</tr>`
      for (  m = 0; m < producto.length; m++) {
          htmlCarrito += `<tr>`      
              htmlCarrito += `<td>${producto[m].nArticulo}</td>`
              htmlCarrito += `<td>${producto[m].marca}</td>`
              htmlCarrito += `<td>${producto[m].numero}</td>`
              htmlCarrito += `<td>${producto[m].color}</td>`
              htmlCarrito += `<td>${producto[m].cantidad}</td>`
              htmlCarrito += `<td>$ ${producto[m].precio}</td>`
              htmlCarrito += `<td><button class="btn-mas" data-btnsuma="${m}">+</button></td>`
              htmlCarrito += `<td><button class="btn-menos" data-btnresta="${m}">-</button></td>`
              htmlCarrito += `<td><button class="btn-borrar-producto" data-btnborrar="${m}">BORRAR</button></td>`
          htmlCarrito += `</tr>`
      }
          htmlCarrito += `</table>`     
*/          
          htmlCarrito += `<div style="width: 100%; display: flex; justify-content: space-around;">`
              htmlCarrito += `<p> Cant. Total: ${cantidadDeProductos}</p><p>Importe Total. $ ${importeTotal}</p>`
          htmlCarrito += `</div>`
          htmlCarrito += `<div class="btn-contenedor-carrito">`
              htmlCarrito += `<button data-idMas="${m}"onclick="seguirComprando()">SEGUIR COMPRANDO</button>`
              htmlCarrito += `<button onclick="vaciarCarrito()">VACIAR CARRITO</button>`
              htmlCarrito += `<button class="btn-pagar" onclick="pagar()">PAGAR</button>`
          htmlCarrito += `</div>`
          
              
              carritoContenedor.innerHTML = htmlCarrito;           
  
  }

  function seguirComprando() {
    document.getElementById('carritoContenedor').style.display="none" 
  }

  // borrar producto unitario
  const carritoConteiner = document.querySelector('.carrito-Contenedor');
  carritoConteiner.addEventListener('click', (a) => {
  
    const productoSelected = a.target.parentElement;
    const botonBorrar = a.target.classList.contains('btn-borrar-producto');
    if ( botonBorrar == true) { 
    const idBorrarProducto = productoSelected.querySelector('.btn-borrar-producto').dataset.btnborrar;
    importeRestar = parseFloat(producto[idBorrarProducto].precio);
    importeTotal = importeTotal - importeRestar;
    localStorage.setItem('totalImporte',importeTotal); // guardo el importe total en localStorage
    producto.splice(idBorrarProducto,1); // borra el producto segun su id    
    localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // se actualiza la base de datos del localStorage
    cantidadDeProductos = producto.length;
    cantidadProductos.innerHTML = cantidadDeProductos;
    mostrarCarrito()
}
  // boton sumar producto unitario
const botonSumar = a.target.classList.contains('btn-mas');
  if (botonSumar == true) {
    const idSumarProducto = productoSelected.querySelector('.btn-mas').dataset.btnsuma;

    let sumar = parseInt(producto[idSumarProducto].precio)
    importeTotal = importeTotal + sumar;
    localStorage.setItem('totalImporte',importeTotal); // guardo el importe total en localStorage
    let sumarProductos = parseFloat(producto[idSumarProducto].cantidad)
    sumarProductos = sumarProductos + 1
    producto[idSumarProducto].cantidad = sumarProductos
    localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // se actualiza la base de datos del localStorage
    cantidadDeProductos = cantidadDeProductos + 1
    cantidadProductos.innerHTML = cantidadDeProductos;
    mostrarCarrito()
  
}
    // boton restar producto unitario
const botonRestar = a.target.classList.contains('btn-menos');
  if (botonRestar == true) {
    const idRestarProducto = productoSelected.querySelector('.btn-menos').dataset.btnresta;
    
    let sumar = parseInt(producto[idRestarProducto].precio)
    importeTotal = importeTotal - sumar;
    localStorage.setItem('totalImporte',importeTotal); // guardo el importe total en localStorage

    let restarProductos = parseFloat(producto[idRestarProducto].cantidad)
    restarProductos = restarProductos - 1
    producto[idRestarProducto].cantidad = restarProductos
    localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // se actualiza la base de datos del localStorage
    cantidadDeProductos = cantidadDeProductos - 1
    cantidadProductos.innerHTML = cantidadDeProductos;
    if (producto[idRestarProducto].cantidad == 0) {
        producto.splice(idRestarProducto,1);
        localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // se actualiza la base de datos del localStorage
        cantidadProductos.innerHTML = 0;
    }
    mostrarCarrito()
  
  a.stopImmediatePropagation() // evita que se multipliquen los eventos en un mismo evento  
}
})

function vaciarCarrito() {
 let vaciarCarrito = producto.length;
 producto.splice(0,vaciarCarrito)
 localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // se actualiza la base de datos del localStorage
 subTotal = 0;
 importeTotal = 0;
 localStorage.setItem('totalImporte',importeTotal);
 cantidadDeProductos = producto.length;
 cantidadProductos.innerHTML = cantidadDeProductos;
 
 mostrarCarritoVacio()
}

function mostrarCarritoVacio() {
  document.getElementById('carritoContenedor').style.display="none" 
  document.getElementById('carritoContenedor').style.display="block" 
  let htmlCarrito = ''
      htmlCarrito += `<div style="width:20em">`
      htmlCarrito += `<p style="text-align: center">TU BOLSA ESTA VACIA</p>`
      htmlCarrito += `<div class="btn-contenedor-carrito">`
            htmlCarrito += `<button data-idMas="${m}"onclick="seguirComprando()">SEGUIR COMPRANDO</button>`
      htmlCarrito += `</div>`
      htmlCarrito += `</div>`
  subTotal = 0;
  importeTotal = 0;
            carritoContenedor.innerHTML = htmlCarrito;   
  
}

