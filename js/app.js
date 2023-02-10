let nSeleccionado;
let objetoSelect;
let objetoSelectId;
let idArticulo;
let artId;
let miNumero;
let contador = 0;
let m;
    let productosSeleccionados
    let cantidadDeProductos = 0;  parseInt(cantidadDeProductos)
    let cantidadDeProductosCarrito = 0;
    cantidadDeProductosCarrito = parseFloat(cantidadDeProductosCarrito);
let subTotal = 0;
let importeTotal;
     importeTotal = parseFloat(localStorage.getItem('totalImporte',importeTotal));
let importeRestar = 0;  
let productosPersistentes;
let clickObjeto;
    let sumar = 0;
const producto = [];

// Ve si hay productos en el localStorage y los agrega al carrito
if ( localStorage.getItem("articulosCarrito")) {
  productosPersistentes = JSON.parse(localStorage.getItem("articulosCarrito"));
  for ( let i = 0; i < productosPersistentes.length; i++){
  producto.push(productosPersistentes[i]);

}}
// agrega la cantidad de productos a la bolsita en el header
  for ( let i = 0; i < producto.length; i++){
    sumar = producto[i].cantidad
    sumar = parseInt(sumar)
    cantidadDeProductos = cantidadDeProductos + sumar
  }   
  cantidadProductos.innerHTML = cantidadDeProductos
  

// La base de datos va a salir de un Json en forma de arrays de datos o desde un js.
const articulos = [
    {
      id:1,
      articulo:320,
      nInicio:34,
      nFinal:47,
      marca:'Jaguar',
      precio:3500,
      imagen:'img/productos/320-black.png',
      color: 'Black',
      idUno: '320black',
      idDos: 'id320black'
    },
    {
      id:2,
      articulo:320,
      nInicio:34,
      nFinal:47,
      marca:'Jaguar',
      precio:3500,
      imagen:'img/productos/320-blanca.png',
      color: 'Blanco',
      idUno: '320blanco',
      idDos: 'id320blanco'
    },
    {
      id: 3,
      articulo: 128,
      nInicio: 19,
      nFinal: 26,
      marca: 'Jaguar',
      precio: 1900,
      imagen: 'img/productos/128-rosa.png',
      color: 'Rosa',
      idUno: '128/1rosa',
      idDos: 'id128/1rosa'
    },
    {
      id: 4,
      articulo: 128,
      nInicio: 27,
      nFinal: 33,
      marca: 'Jaguar',
      precio: 1900,
      imagen: 'img/productos/128-jean.png',
      color: 'Jean',
      idUno: '128/2jean',
      idDos: 'id128/2jean'
    },
    {
      id: 5,
      articulo: 2010,
      nInicio: 35,
      nFinal: 40,
      marca: 'Cromic',
      precio: 2100,
      imagen: 'img/productos/2010-rosa.png',
      color: 'Rosa',
      idUno: '2010/2rosa',
      idDos: 'id2010/2rosa'
    },
    {
      id: 6,
      articulo: 2010,
      nInicio: 35,
      nFinal: 40,
      marca: 'Cromic',
      precio: 2100,
      imagen: 'img/productos/2010-negra.png',
      color: 'Negro',
      idUno: '2010/2negra',
      IdDos: 'id2010/2negra'
    },
    {
      id: 7,
      articulo: 1153,
      nInicio: 19,
      nFinal: 26,
      marca: 'Tridy',
      precio: 2500,
      imagen: 'img/productos/1153-blanca.png',
      color: 'Blanco',
      idUno: '1153blanca',
      idDos: 'id1153blanca'
    },
    {
      id: 8,
      articulo: 1153,
      nInicio: 19,
      nFinal: 26,
      marca: 'Tridy',
      precio: 2500,
      imagen: 'img/productos/1153-negra.png',
      color: 'Negro',
      idUno: '1153negra',
      idDos: 'id1153negra'
    },
    {
      id: 9,
      articulo: 4077,
      nInicio: 35,
      nFinal: 44,
      marca: 'Shadow',
      precio: 4900,
      imagen: 'img/productos/4077.png',
      color: 'Nagro/Marron',
      idUno: '4077negromarron',
      idDos: 'id4077negromarron'
     },
     {
      id: 10,
      articulo: 'EXTREME 01',
      nInicio:  39,
      nFinal: 45,
      marca: 'Ringo',
      precio: '15900',
      imagen: 'img/productos/extreme01-negra.png',
      color: 'Negro',
      idUno: 'extreme01negra',
      idDos: 'idextreme01negra'
    },
    {
      id: 11,
      articulo: 286,
      nInicio: 35,
      nFinal: 41,
      marca: 'Arana',
      precio: 9800,
      imagen: 'img/productos/286-suela.png',
      color: 'Suela',
      idUno: '286suela',
      idDos: 'id286suela'
    },
    {
      id: 12,
      articulo: 1778,
      nInicio: 35,
      nFinal: 40,
      marca: 'Airness',
      precio: 8700,
      imagen: 'img/productos/1778-multicolor.png',
      color: 'Multicolor',
      idUno: '1778multicolor',
      idDos: 'id1778multicolor'
    },
    {
      id: 13,
      articulo: 25463,
      nInicio:35,
      nFinal:41,
      marca:'Ipanema',
      precio: 2800,
      imagen:'img/productos/25463ipanemaAzFx.png',
      color: 'Azul/Fuxcia',
      idUno: '25463ipanemaAzFx',
      idDos: 'id25463ipanemaAzFx'
    },
    {
      id: 14,
      articulo: 26525,
      nInicio:35,
      nFinal:41,
      marca:'Ipanema',
      precio: 2800,
      imagen:'img/productos/26525IpanemaARo.png',
      color: 'Azul/Rosa',
      idUno: '26525IpanemaARosa',
      idDos: 'id26525IpanemaARosa'
    },
    {
    id: 15,
    articulo: 404,
    nInicio:39,
    nFinal:45,
    marca:'Donkey',
    precio: 3700,
    imagen:'img/productos/404Donkeyaz.png',
    color: 'Azul',
    idUno: '404Donkeyaz',
    idDos: 'id404Donkeyaz'
  },
  {
    id: 16,
    articulo: 404,
    nInicio:39,
    nFinal:45,
    marca:'Donkey',
    precio: 3700,
    imagen:'img/productos/404Donkeyne.png',
    color: 'Negro',
    idUno: '404Donkeyne',
    idDos: 'id404Donkeyne'
  },
]
// crear las cards de cada producto
for ( var indice in articulos) {
  artId = articulos[indice].id;
        let html = ''
            html += `<section class="cards">`
            html += `<p class="articulo">${articulos[indice].articulo}</p>`;
            html += `<p class="marca">${articulos[indice].marca}</p>`;
            html += `<img src="${articulos[indice].imagen}" alt="Calzado ${articulos[indice].idUno}}" />`;
            html += `<select class="selectNumero" id="${articulos[indice].idUno}" data-id="${articulos[indice].idUno}" onchange="seleccion()">`;
            html +=  ` <option>Numeracion</option>`
                            for ( let n = articulos[indice].nInicio; n <= articulos[indice].nFinal; n++) {
                        html +=  ` <option value="${n}">Nº ${n}</option>`
                                }
            html += `</select>`;
        
            html += `<div class="signoPrecio">`          
            html += `<p>$</p>`
            html += `<p class="precio"> ${articulos[indice].precio}</p>`;
            html += `</div>`
            html += `<button data-id="${articulos[indice].id}" class="btn">COMPRAR</button>`;
            html += `<span class="numberr" data-miNumero="${articulos[indice].idDos}" id="nSeleccion">Nº</span><span class="color" id="color">${articulos[indice].color}</span>`;
        
      contenedorArticulos.innerHTML += html // muestro en pantalla los productos.
  
// Selecciona el numero del calzado.
function seleccion() {     
  nSeleccionado = document.getElementById(idArticulo).value;
     
}

}


// Ingresando productos al carrito de compras
const contenedor = document.querySelector('.contenedor');
contenedor.addEventListener('click', (e) => {

  objetoSelect = e.target.parentElement;
  objetoSelectId = objetoSelect.querySelector('select').dataset.id;
  idArticulo = objetoSelectId
 
    clickObjeto = e.target.parentElement;  // al hacer click en el boton comprar me dice que hay dentro del contenedor,
                                                // con esta info puedo crear el array de objetos con el producto.
    const boton = e.target.classList.contains('btn'); // elijo el boton para hacer alguna accion, al hacer clcik devuelve true.
       // console.log(boton) // al hacer click en el boton devuelve true
    if ( boton == true) {

        producto.push({
            id:clickObjeto.querySelector('button').dataset.id,
            nArticulo:clickObjeto.querySelector('.articulo').textContent,
            marca: clickObjeto.querySelector('.marca').textContent,
            precio:clickObjeto.querySelector('.precio').textContent,
            numero: nSeleccionado,
            color: clickObjeto.querySelector('.color').textContent,
            cantidad: 1
        })  

        localStorage.setItem("articulosCarrito",JSON.stringify(producto)); // el articulo comprado queda persistente
        subTotal = clickObjeto.querySelector('.precio').textContent;
        subTotal = parseFloat(subTotal)
        importeTotal = importeTotal + subTotal;
        localStorage.setItem('totalImporte',importeTotal); // guardo el importe total en localStorage
        checkCompra()
    }
    
});

function mostrarCarrito(){
  if ( producto.length === 0) {
    mostrarCarritoVacio()
  return;
}
 
  document.getElementById('carritoContenedor').style.display="block"; 
  document.getElementById('carritoContenedor').style.borderRadius="5px";
   
    let htmlCarrito = ''
        htmlCarrito = `<p class="tuCompra">Tu compra</p>`
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

function checkCompra() {
// agrega la cantidad de productos a la bolsita en el header
cantidadDeProductos = cantidadDeProductos + 1
cantidadProductos.innerHTML = cantidadDeProductos
document.querySelector('.avisoDeCompra').style.display='inline-block';
 
}

function cerrarPestaña(){
document.querySelector('.avisoDeCompra').style.display="none";
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