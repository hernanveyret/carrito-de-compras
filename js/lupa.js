// Lupa
const contenedorLupa = document.querySelector('.contenedor');
      contenedorLupa.addEventListener('click',(l) => {
      const objetoSelectLupa = l.target.parentElement;
      const btnLupa = l.target.classList.contains('lupa')
      if(btnLupa) {
        const idLupa = objetoSelectLupa.querySelector('img').dataset.lupa;
        llamarLupa(idLupa);
        
      }
      })

// Cerrar Ventana de lupa
function cerrarVentanaLupa() {
  document.getElementById('lupaVentana').style.display="none";
}

function llamarLupa(idLupa) {
  document.getElementById('lupaVentana').style.display="flex";
  document.getElementById('lupaImagen').innerHTML = `<img src="./${idLupa}" alt="Imagen calzado" style="width: 100%"/>`
}
