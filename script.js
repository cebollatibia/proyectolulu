const uri = "https://raw.githubusercontent.com/cebollatibia/micarro/main/";

    const container = document.getElementById("productos-container");
    const carritoLista = document.getElementById("carrito-lista");
    const carritoContador = document.getElementById("carrito-contador");
    const totalCompra = document.getElementById("total-compra");
    const carritoModal = document.getElementById("carrito-modal");
    let carrito = [];

fetch(uri + "micarro.json").then(function(respuesta) {
    return respuesta.json()
}).then(function(datos) {
  for(let i =0; i < datos.length; i+=1) {
    const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${uri+datos[i].imagen}" alt="${datos[i].nombre}" />
        <h3>${datos[i].nombre}</h3>
        <p>Precio: $${datos[i].precio.toFixed(2)}</p>
        <button onclick="agregarAlCarrito(${datos[i].id})">Añadir</button>
      `;
      container.appendChild(div);
      
  }
   }
).catch(function(error) {
     console.log(error)
});
function agregarAlCarrito(id) {
      const producto = datos.find(p => p.id === id);
      carrito.push(producto);
      actualizarCarrito();
    }

    function actualizarCarrito() {
      carritoLista.innerHTML = '';
      let total = 0;
      carrito.forEach((item, index) => {
        total += item.precio;
        const li = document.createElement("li");
        li.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} 
          <button onclick="eliminarDelCarrito(${index})">❌</button>`;
        carritoLista.appendChild(li);
      });
      carritoContador.textContent = carrito.length;
      totalCompra.textContent = total.toFixed(2);
    }

    function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    function toggleCarrito() {
      carritoModal.style.display = carritoModal.style.display === 'block' ? 'none' : 'block';
    }