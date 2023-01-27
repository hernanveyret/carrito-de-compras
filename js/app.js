let nSeleccionado;
let objetoSelect;
let objetoSelectId;
let idArticulo;
let artId;
let miNumero;
let contador = 0;
let m;
let productosSeleccionados
let cantidadDeProductos;

let productosPersistentes;
const producto = [];

// Ve si hay productos en el localStorage
if ( localStorage.getItem("articulosCarrito")) {
  console.log('hay productos guardados');
  productosPersistentes = JSON.parse(localStorage.getItem("articulosCarrito"));
  for ( let i = 0; i < productosPersistentes.length; i++){
  producto.push(productosPersistentes[i]);

}}
// agrega la cantidad de productos a la bolsita en el header
cantidadDeProductos = producto.length;
cantidadProductos.innerHTML = cantidadDeProductos

const articulos = [
    [1,320,34,47,'Jaguar',3500,'img/productos/320-black.png','black','320black','id320black'],
    [2,320,34,47,'Jaguar',3500,'img/productos/320-blanca.png','blanca','320blanco','id320blanco'],
    [3,4077,35,44,'Shadow',4900,'img/productos/4077.png','marron','4077marron','id4077marron'],
    [4,128,19,26,'Jaguar',1900,'img/productos/128-rosa.png','rosa','128/1rosa','id128/1rosa'],
    [5,128,27,33,'Jaguar',1900,'img/productos/128-jean.png','jean','128/2jean','id128/2jean'],
    [6,2010,35,40,'Cromic',2100,'img/productos/2010-rosa.png','rosa','2010/2rosa','id2010/2rosa'],
    [7,2010,35,40,'Cromic',2100,'img/productos/2010-negra.png','negra','2010/2negra','id2010/2negra'],
    [8,1153,19,26,'Tridy',2500,'img/productos/1153-negra.png','negra','1153negra','id1153negra'],
    [9,1153,19,26,'Tridy',2500,'img/productos/1153-blanca.png','blanca','1153blanca','id1153blanca'],
    [10,'EXTREME 01', 39,45,'Ringo','15900','img/productos/extreme01-negra.png','negra','extreme01negra','idextreme01negra'],
    [11,286,35,41,'Arana',9800,'img/productos/286-suela.png','suela','286suela','id286suela'],
    [12,1778,35,40,'Airness',8700,'img/productos/1778-multicolor.png','multicolor','1778multicolor','id1778multicolor']
]
/*
La base de datos va a salir de un Json en forma de arrays de datos o desde un js.
const articulo = [
    {
      id:1,
      articulo:320,
      nInicio:34,
      nFinal:47,
      marca:'Jaguar',
      precio:3500,
      imagen:'black.png',
      cantidad: '1'
    },
    {
      id:2,
      articulo:320,
      nInicio:34,
      nFinal:47,
      marca:'Jaguar',
      precio:3500,
      imagen:'blanca.png',
      cantidad: '1'
    },
    {
      id:3,
      articulo:4077,
      nInicio:35,
      nFinal:44,
      marca:'Shadow',
      precio:4900,
      imagen:'4077.jpg',
      cantidad: '1'
    },
    {
      id:4,
      articulo:128,
      nInicio:19,
      nFinal:26,
      marca:'Jaguar',
      precio:1900,
      imagen:'rosa.png',
      cantidad: '1'
    },
    {
      id:5,
      articulo:128,
      nInicio:27,
      nFinal:34,
      marca:'Jaguar',
      precio:2200,
      imagen:'jean.png',
      cantidad: '1'
    }
]
*/
  // crear las cards de cada producto
for (let i = 0; i < articulos.length; i++) {
  artId = articulos[i][0];
        let html = ''
            html += `<section class="cards">`
            html += `<p class="articulo">${articulos[i][1]}</p>`;
            html += `<p class="marca">${articulos[i][4]}</p>`;
            html += `<img src="${articulos[i][6]}" alt="Calzado ${articulos[i][8]}" />`;
            html += `<select id="${articulos[i][8]}" data-id="${articulos[i][8]}" onchange="seleccion()">`;
            html +=  ` <option>Numeracion</option>`
                            for ( let n = articulos[i][2]; n <= articulos[i][3]; n++) {
                        html +=  ` <option value="${n}">Nº ${n}</option>`
                                }
            html += `</select>`;
        
            html += `<div class="signoPrecio">`          
            html += `<p>$</p>`
            html += `<p class="precio"> ${articulos[i][5]}</p>`;
            html += `</div>`
            html += `<button data-id="${articulos[i][0]}" class="btn">COMPRAR</button>`;
            html += `<span class="numberr" data-miNumero="${articulos[i][9]}" id="nSeleccion">Nº</span><span class="color" id="color">${articulos[i][7]}</span>`;
        
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
 
    const clickObjeto = e.target.parentElement;  // al hacer click en el boton comprar me dice que hay dentro del contenedor,
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
        
        checkCompra()
    }
    
});

function mostrarCarrito(){
  if ( producto.length === 0) { alert('El carrito esta vacio')
  return;
}
 
  document.getElementById('carritoContenedor').style.display="block"; 
  document.getElementById('carritoContenedor').style.borderRadius="5px";
   
    let htmlCarrito = ''
        htmlCarrito = `<p style="margin-left: 5px">Tu compra</p>`
        htmlCarrito += `<table border="1" cellspacing="0" cellpadding="7">`
        
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
            htmlCarrito += `<td>${producto[m].precio}</td>`
            htmlCarrito += `<td><button class="btn-mas" onclick="sumarCantidad()">+</button></td>`
            htmlCarrito += `<td><button class="btn-menos" onclick="restarCantidad()">-</button></td>`
            htmlCarrito += `<td><button class="btn-borrar-producto" onclick="borrarproducto()">BORRAR</button></td>`
        htmlCarrito += `</tr>`
    }
            htmlCarrito += `</table>`            

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
cantidadDeProductos = producto.length;
cantidadProductos.innerHTML = cantidadDeProductos;
 document.querySelector('.avisoDeCompra').style.display='inline-block';
 
}

function cerrarPestaña(){
document.querySelector('.avisoDeCompra').style.display="none";
}