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
