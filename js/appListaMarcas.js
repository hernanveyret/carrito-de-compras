const productosMenu = [];

// tomar informacion de Json.
fetch('js/baseDeDatos.json').then(response =>{ 
  return response.json();   
      }).then(articulos => {            // pone la informacion en la variable articulos  
        for ( let i in articulos) {                 // recorro el array de objetos
          productosMenu.push(articulos[i].marca);   // ingreso cada marca al array productosMenu
            for ( let pm in productosMenu) {        // recorro el array productosMenu
              if (productosMenu[pm - 1] == articulos[i].marca) {  // si el valor anterio es igual al nuevo valor
                productosMenu.pop()                                // borra el ultimo valor por ser igual al anterior.
              }
              
            }
            
        }
        productosMenu.sort()    // Acomoda alfabeticamente el array
            // terminado de crear el array de las marcas, creo el template del menu de marcas
        let html = '';
            html += `<h3 class="hMarcas">MARCAS</h3>`;      
            html += `<ul class="ulLista">`;                
                for ( let i = 0; i < productosMenu.length; i++ ) {
                    html += `<li><button class="btn-marcas" data-id="${productosMenu[i]}"">${productosMenu[i]}</button></li>`;
                }
            html += `</ul>`;
            menuMarcas.innerHTML = html

      }) 

      let contenedor = document.querySelector('.contenedor');
        contenedor.addEventListener('click', (e) => {
        const objetoSelect = e.target.parentElement;
        const btnlista = e.target.classList.contains('btn-marcas');
            if ( btnlista == true ){ 
                let algo = objetoSelect.querySelector('.btn-marcas').dataset.id
                   console.log(algo)
                   localStorage.setItem('eleccionPorMarca',algo);
                   location.href="carritoPorMarcas.html";
  
            }
})

// Seleccionar articulos por categoria
const selectorCategorias = document.querySelector('.cardsCategorias');
      selectorCategorias.addEventListener('click', (e) => {
      const objetoCategorias = e.target.parentElement;
      const btnCategorias = e.target.classList.contains('imgGenero');
            if (btnCategorias) {
              let miCategoria = objetoCategorias.querySelector('.caption').dataset.categoria;
              localStorage.setItem('miCategoria', miCategoria);
              location.href="carritoPorCategoria.html";
            }
    })