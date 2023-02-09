# carrito-de-compras
Pagina de venta de calzados / carrito de compras / practicando lo aprendido / aprendiendo algo dia a dia.
28/01/2023, comienzo a escribir aca cada vez que subo una actualizacion, no se bien para que servira, pero es un recordatorio de lo que voy haciendo.

28/01/2023: 1) Finalice el boton de borrado de productos dentro del carrito de compras, tenia un problema; de que cada vez que hacia click en borrar,
               el evento se multiplicaba, asi que me borraba 1 producto, despues 2 productos y asi sucesivamente, lo solucione con  "a.stopImmediatePropagation()"
               siendo la "a" el evento del addEventListener.
            2) Agregue cuando el carrito queda vacio aparece un cartel diciendo que la bolsa esta vacia y da la opcion de seguir comprando.
            3) Ahora cuando se borra un producto lo descuenta del total a pagar y cuando agregamos un producto lo suma, tambien quedo el total persistente " TENGO QUE
               HACER QUE QUEDE PERSISTENTE DE OTRA FORMA", no me convence que quede el precio en el localStorage.         
            4) Quedo funcionando el boton vaciar carrito.
            5) Agregue la funcion de sumar y restar productos individuales en el carrito, cuando restas y llega a (0)cero se elimina el producto del carrito.
            
30/01/2023: 1) Mejore las funciones de borrar, sumar y restar los productos unitarios, quedo con menos codigo y mas 

31/01/2023: 1) Agregue a las funciones de sumar y restar producto unitario la modificacion en el total del importe, se actualiza el carrito y queda persistente.

01/02/2023: 1) Cambie para la base de datos de un array a un array de objetos, queda mucho mejor a la hora de cargar diferentes articulos, ya que por cada valor tiene un                nombre y se puede identificar bien que poner,  ejemplo, si tenemos que poner el color, queda color: 'Negro'.

08/02/2023: 1) Subi la parte de inicio, arregle algunos botones que andaban mal y estoy modificando laestructura de la muestra de productos con algo que se me ocurrio.

09/02/2023 1) Cambie la forma de ver las imagenes del catalogo.
