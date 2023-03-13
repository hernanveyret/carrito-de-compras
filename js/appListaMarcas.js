const productosMenu = [];
const productosEstilo = [];

// tomar informacion de Json.
fetch('js/base.json').then(response =>{ 
  return response.json();   
      }).then(articulos => {            // pone la informacion en la variable articulos  
        for ( let i in articulos) {                 // recorro el array de articulos
          productosMenu.push(articulos[i].marca);   // ingreso cada marca al array productosMenu
          productosEstilo.push(articulos[i].estilo);   // ingreso cada estilo al array productosEstilo
            for ( let pm in productosMenu) {        // recorro el array productosMenu
              if (productosMenu[pm - 1] == articulos[i].marca) {  // si el valor anterio es igual al nuevo valor
                productosMenu.pop()                                // borra el ultimo valor por ser igual al anterior.
              }              
            }
                // creo array de estilos e calzados para menu
            for (let pe in productosEstilo) {
              if ( productosEstilo[pe - 1] == articulos[i].estilo) {
                productosEstilo.pop()
              }
            }
            
        }        
        
        productosMenu.sort()    // Acomoda alfabeticamente el array
        productosEstilo.sort()
        
            // terminado de crear el array de las marcas, creo el template del menu de marcas
        let html = '';
            html += `<h3 class="hMarcas">MARCAS</h3>`;      
            html += `<ul class="ulLista">`;                
                for ( let i = 0; i < productosMenu.length; i++ ) {
                    html += `<li style="list-style: none"><button class="btn-marcas" data-id="${productosMenu[i]}"">${productosMenu[i]}</button></li>`;
                }
            html += `</ul>`;
            menuMarcas.innerHTML = html


            // Menu de estilos
        let htmlE = '';
            htmlE += `<h3 class="hMarcas">ESTILOS</h3>`;
            htmlE += `<select id="menuPorEstilo" onchange="estiloMenu()">`;
                  htmlE += `<option  style="text-align: center">TU ELECCION</option>`;    
                  for( let i = 0; i < productosEstilo.length; i++) {
                        htmlE += `<option value="${productosEstilo[i]}" style="text-align: center">${productosEstilo[i]}</option>`;
                      }
            htmlE += `</select>`;
            menuEstilos.innerHTML = htmlE;

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
              localStorage.setItem('seleccionPor','categoria');
              location.href="carritoPorCategoria.html";
            }
    })

// Selector menu por estilo
function estiloMenu() {
  let miEstiloSeleccion = document.getElementById('menuPorEstilo').value;
  localStorage.setItem('miEstilo', miEstiloSeleccion);
  localStorage.setItem('seleccionPor','estilo');
  location.href="carritoPorCategoria.html";
}