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

    const producto = [];  // Array donde ingresan los productos seleccionados

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

// nuevo menus de seleccion
let menuSeleccionPor = localStorage.getItem('tipoDeEleccion');
let menuTuSeleccion = localStorage.getItem('tuEleccion');

// tomar informacion de Json.
fetch('js/base.json').then(response =>{ 
    return response.json();   
}).then(articulos => {            // pone la informacion en la variable articulos  ----------------------

// La categoria colegial es una subcategoria ya que es tambien niños, por eso cree un if aparte  
if (menuTuSeleccion == 'colegial' ) {
 const productosPorEleccion = articulos.filter((e) => e.subEstilo == 'colegial');
 mostrarCards(productosPorEleccion);
}
// Detecta la seleccion por menu, estilo,material,categoria,marca y su eleccion.
const productosPorEleccion = articulos.filter((e) => e[menuSeleccionPor] == menuTuSeleccion );
if (menuSeleccionPor === 'categoria' && menuTuSeleccion == 'hombre' || menuTuSeleccion == 'dama') {
    for ( let c = 0; c < articulos.length; c++) {
      if ( articulos[c].categoria == 'unisex'){
      productosPorEleccion.push(articulos[c]);
      }
    }
}
// Template que crea las cards para mostrar
mostrarCards(productosPorEleccion);
            function mostrarCards(productosPorEleccion) {
              for ( let indice in productosPorEleccion) {
                artId = productosPorEleccion[indice].id;
            let html = ''
                html += `<section class="cards">`
                html += `<div class="contenedorLupa">`;
                html += `<img class="lupa" src="img/imagenes/lupa.png" alt="Lupa" data-lupa="${productosPorEleccion[indice].imagen}"/>`;
                html += `</div>`;
                html += `<p class="articulo">${productosPorEleccion[indice].articulo}</p>`;
                html += `<p class="marca">${productosPorEleccion[indice].marca}</p>`;
                html += `<img src="${productosPorEleccion[indice].imagen}" alt="Calzado ${productosPorEleccion[indice].idUno}}" />`;
                html += `<p style="border: 1px solid grey; padding: 1px 3px;">${articulos[indice].color}</p>`;
                html += `<select class="selectNumero" id="${productosPorEleccion[indice].idUno}" data-id="${productosPorEleccion[indice].idUno}" onchange="seleccion()">`;
                html +=  ` <option>Numeracion</option>`
                                for ( let n = productosPorEleccion[indice].nInicio; n <= productosPorEleccion[indice].nFinal; n++) {
                                      html +=  ` <option value="${n}">Nº ${n}</option>`
                                    }
                html += `</select>`;        
                html += `<div class="signoPrecio">`          
                html += `<p>$</p>`
                html += `<p class="precio"> ${productosPorEleccion[indice].precio}</p>`;
                html += `</div>`;            
                html += `<button data-id="${productosPorEleccion[indice].id}" class="btn">COMPRAR</button>`;
                                    if ( productosPorEleccion[indice].otrosColores) { 
                  html += `<button data-identificador="${productosPorEleccion[indice].idDos}" class="btn-verMas" style="font-size: 10px;" >VER MAS</button>`;
                                    }else {
                                      html += `<p style="color:white; padding: 6px 0px">.</p>`;
                                    }                        
                html += `<span class="numberr" data-miNumero="${productosPorEleccion[indice].idDos}" id="nSeleccion">Nº</span><span class="color" id="color">${productosPorEleccion[indice].color}</span>`;
                            html += `</section>`       ;

                // SubCards
                        if( productosPorEleccion[indice].otrosColores) {                                  
                            for ( var subIndice in productosPorEleccion[indice].otrosColores) {                              
                          
                          html += `<section class="subCards" id="${productosPorEleccion[indice].idDos}">`
                          html += `<div class="contenedorLupa">`;
                          html += `<img class="lupa" src="img/imagenes/lupa.png" alt="Lupa" data-lupa="${productosPorEleccion[indice].otrosColores[subIndice].imagen}"/>`;
                          html += `</div>`;
                            html += `<p class="articulo">${productosPorEleccion[indice].articulo}</p>`;
                            html += `<p class="marca">${productosPorEleccion[indice].marca}</p>`;
                            html += `<img src="${productosPorEleccion[indice].otrosColores[subIndice].imagen}" alt="Calzado ${productosPorEleccion[indice].otrosColores[subIndice].idUno}" />`;
                            html += `<p style="border: 1px solid grey; padding: 1px 3px;">${productosPorEleccion[indice].otrosColores[subIndice].color}</p>`;
                            html += `<select class="selectNumero" id="${productosPorEleccion[indice].otrosColores[subIndice].idUno}" data-id="${productosPorEleccion[indice].otrosColores[subIndice].idUno}" onchange="seleccion()">`;
                            html +=  ` <option>Numeracion</option>`
                                            for ( let n = productosPorEleccion[indice].otrosColores[subIndice].nInicio; n <= productosPorEleccion[indice].otrosColores[subIndice].nFinal; n++) {
                                        html +=  ` <option value="${n}">Nº ${n}</option>`
                                                }
                            html += `</select>`;        
                            html += `<div class="signoPrecio">`          
                            html += `<p>$</p>`
                            html += `<p class="precio"> ${productosPorEleccion[indice].precio}</p>`;
                            html += `</div>`;            
                            html += `<button data-id="${productosPorEleccion[indice].otrosColores[subIndice].id}" class="btn">COMPRAR</button>`;
                            html += `<button data-identificador="${productosPorEleccion[indice].idDos}" style="font-size: 10px;"  class="btn-verMenos">VER MENOS</button>`;
                            html += `<span class="numberr" data-miNumero="${productosPorEleccion[indice].otrosColores[subIndice].idDos}" id="nSeleccion">Nº</span><span class="color" id="color">${productosPorEleccion[indice].otrosColores[subIndice].color}</span>`;
                            html += `</section>`;
                                        }
                                    }

                            contenedorArticulos.innerHTML += html // muestro en pantalla los productos. 
            }
          }
        
})

//------------------------------------------
// Selecciona el numero del calzado.
function seleccion() {
    nSeleccionado = document.getElementById(idArticulo).value;
  }

	
// Ingresando productos al carrito de compras
const contenedor = document.querySelector('.contenedor');
contenedor.addEventListener('click', (e) => {

  objetoSelect = e.target.parentElement;
  const btnSelect = e.target.classList.contains('selectNumero');
     if(btnSelect) {
        objetoSelectId = objetoSelect.querySelector('select').dataset.id;
          idArticulo = objetoSelectId
  }
 
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

// Funcion para mostrar y ocultar las Sub Cards
const contenedorCards = document.querySelector('.contenedor');
      contenedorCards.addEventListener('click', (a) => {
        const objetoVerMas = a.target.parentElement;
        const btnVermas = a.target.classList.contains('btn-verMas');
        const btnVermenos = a.target.classList.contains('btn-verMenos');
        
              if(btnVermas === true) {
                const idSubCards = objetoVerMas.querySelector('.btn-verMas').dataset.identificador;                
                const grupoDeSubCards = document.querySelectorAll("#" + idSubCards);
                  for ( let i = 0; i < grupoDeSubCards.length; i++) {
                    grupoDeSubCards[i].style.display="flex";
                  }
              }

              if(btnVermenos === true) {
                const idSubCardsmenos = objetoVerMas.querySelector('.btn-verMenos').dataset.identificador;
                const grupoDeSubCardsmenos = document.querySelectorAll("#" + idSubCardsmenos);
                      for (let i = 0; i < grupoDeSubCardsmenos.length; i++) {
                        grupoDeSubCardsmenos[i].style.display="none";
                      }
              }

      })

//------------------------------------------


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

   function checkCompra() {
    // agrega la cantidad de productos a la bolsita en el header
    cantidadDeProductos = cantidadDeProductos + 1
    cantidadProductos.innerHTML = cantidadDeProductos
    document.querySelector('.avisoDeCompra').style.display='inline-block';
     
    }

    function cerrarPestaña(){
        document.querySelector('.avisoDeCompra').style.display="none";
        }
