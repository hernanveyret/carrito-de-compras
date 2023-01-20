let nSeleccionado;
let idArticulo;
let artId;
const carrito = [];
const producto = [];
const articulos = [
    [1,320,34,47,'Jaguar',3500,'black.png','black','320black'],
    [2,320,34,47,'Jaguar',3500,'blanca.png','blanca','320blanco'],
    [3,4077,35,44,'Shadow',4900,'4077.png','marron','4077marron'],
    [4,128,19,26,'Jaguar',1900,'rosa.png','rosa','128/1rosa'],
    [5,128,27,33,'Jaguar',1900,'jean.png','jean','128/2jean'],
    [6,2010,35,40,'Cromic',2100,'2010.png','rosa','2010/2rosa'],
    [7,2010,35,40,'Cromic',2100,'2010-negra.png','negra','2010/2negra'],
    [8,1153,19,26,'Tridy',2500,'1153-negra.png','negra','1153negra'],
    [9,1153,19,26,'Tridy',2500,'1153-blanca.png','blanca','1153blanca']
]
/*
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
for (let i = 0; i < articulos.length; i++) {
  artId = articulos[i][8];
        let html = ''
            html += `<section class="cards">`
            html += `<p class="articulo">${articulos[i][1]}</p>`;
            html += `<p class="marca">${articulos[i][4]}</p>`;
            html += `<img src="${articulos[i][6]}" alt="Zapatilla Jaguar art 320 black" />`;
            html += `<select id="${artId}" data-id="${articulos[i][8]}" onchange="seleccion()">`;
                            for ( let n = articulos[i][2]; n <= articulos[i][3]; n++) {
                        html +=  ` <option value="${n}">Nº ${n}</option>`
                                }
            html += `</select>`;
            html += `<p class="precio">$ ${articulos[i][5]}</p>`;
            html += `<button data-id="${articulos[i][0]}" class="btn">COMPRAR</button>`;
            html += `<span class="numberr" id="nSeleccionado">Nº</span><span class="color"id="color">${articulos[i][7]}</span>`;
        
      contenedorArticulos.innerHTML += html

// Selecciona el numero del calzado.
function seleccion() {    
    
    nSeleccionado = document.getElementById(idArticulo).value;    
      
 }
}

// Ingresando productos al carrito de compras
const contenedor = document.querySelector('.contenedor');
contenedor.addEventListener('click', (e) => {

  var objetoSelect = e.target.parentElement;
  var objetoSelectId = objetoSelect.querySelector('select').dataset.id;
  idArticulo = objetoSelectId
    
    const con = e.target.parentElement;  // muestra donde hago click
    const boton = e.target.classList.contains('btn'); // elijo el boton para hacer alguna accion
       // console.log(boton) // al hacer click en el boton da truee
    if ( boton == true) {

        producto.push({
            id:con.querySelector('button').dataset.id,
            nArticulo:con.querySelector('.articulo').textContent,
            marca: con.querySelector('.marca').textContent,
            precio:con.querySelector('.precio').textContent,
            numero: nSeleccionado,
            color: con.querySelector('.color').textContent,
            cantidad: '1'
        })        
        mostrarCarrito()
    }
});

function mostrarCarrito(){
  let carro = '';
  for ( let m = 0; m < producto.length; m++){
    carritoContenedor.innerHTML ="";
    carritoContenedor.innerHTML += `${producto[m].nArticulo}<br>`
    console.log(producto[m])
  }
}
