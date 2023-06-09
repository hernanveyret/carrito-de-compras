// tomar informacion de Json.
fetch('js/base.json').then(response =>{ 
    return response.json();   
}).then(articulos => {            // pone la informacion en la variable articulos  

const  destacados = articulos.filter((e) => e.destacado === true);
console.log(destacados);
const ofertas = articulos.filter((e) => e.oferta === true);
console.log(ofertas);

for ( let indice in destacados) {
    let des = '';
        des += `<section class="indexCards">`;
        des += `<p class="articulo">${destacados[indice].articulo}</p>`;
        des += `<p class="marca">${destacados[indice].marca}</p>`;
        des += `<img src="${destacados[indice].imagen}" alt="Calzado ${destacados[indice].idUno}}" />`;
        des += `<p>Del ${destacados[indice].nInicio} al ${destacados[indice].nFinal}</p>`
        des += `<div class="signoPrecio">`          
        des += `<p>$</p>`
        des += `<p class="precio"> ${articulos[indice].precio}</p>`;
        des += `</div>`; 
        des += `<button class="btn">VER</button>`;
        des += `</section>`; 
                   
        idDestacados.innerHTML += des;
   }

   for ( let indice in ofertas) {
    let off = '';
        off += `<section class="indexCards">`;
        off += `<p class="articulo">${ofertas[indice].articulo}</p>`;
        off += `<p class="marca">${ofertas[indice].marca}</p>`;
        off += `<img src="${ofertas[indice].imagen}" alt="Calzado ${ofertas[indice].idUno}}" />`;
        off += `<p>Del ${ofertas[indice].nInicio} al ${ofertas[indice].nFinal}</p>`
        off += `<div class="signoPrecio">`          
        off += `<p>$</p>`
        off += `<p class="precio"> ${ofertas[indice].precio}</p>`;
        off += `</div>`; 
        off += `<button class="btn">VER</button>`;
        off += `</section>`;            
        idOfertas.innerHTML += off;
   }



})

