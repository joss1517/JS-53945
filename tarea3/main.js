class Vinil {
  constructor(id, nombre, medida, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.medida = medida;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}

const vajilla = new Vinil(1,"Vajilla", "150x42 cms.", 250, "img/cocina-01.webp");
const cenefa = new Vinil(2, "Cenefa vajilla", "186x30 cms.", 280, "img/cocina-02.webp");
const bonAppetit = new Vinil( 3, "Bon Appetit", "133x60 cms.", 260, "img/cocina-03.webp");
const food = new Vinil(4, "Food", "60x60 cms.", 180, "img/cocina-04.webp");
const laCocina = new Vinil(5, "La cocina", "86x60 cms.", 190, "img/cocina-05.webp");
const pizca = new Vinil(6, "Pizca de Amor", "60x72 cms.", 185, "img/cocina-06.webp");
const chef = new Vinil(7, "Chef", "98x60 cms.", 200, "img/cocina-07.webp");
const ingrediente = new Vinil(8, "El Ingrediente", "60x60 cms.", 180, "img/cocina-08.webp");
const panza = new Vinil(9, "Panza Llena", "89x60 cms.", 190, "img/cocina-09.webp");
const electro = new Vinil( 10, "Electrodomésticos", "89x60 cms.", 140, "img/cocina-10.webp");
const kitchen = new Vinil( 11, "Kitchen", "60x77 cms.", 185, "img/cocina-11.webp");
const hambre = new Vinil( 12, "El amor", "60x70 cms.", 185, "img/cocina-12.webp");
const bonAppetitDos = new Vinil( 13, "Bon Appetit-2", "60x53 cms.", 170, "img/cocina-13.webp");
const ifYou = new Vinil(14, "Si quieres té", "66x60 cms.", 180, "img/cocina-14.webp");
const chefDos = new Vinil(15, "Chef-Cubiertos", "60x63 cms.", 180, "img/cocina-15.webp");
const cocina = new Vinil(16, "Cocina", "73x60 cms.", 185, "img/cocina-16.webp");
const vida = new Vinil(17, "La vida", "60x81 cms.", 190, "img/cocina-17.webp");
const hoy = new Vinil(18, "Hoy me comeré la vida", "60x107 cms.", 210, "img/cocina-18.webp");
const cocinaDos = new Vinil( 19, "Cocina-2", "80x60 cms.", 190, "img/cocina-19.webp");
const myKitchen = new Vinil(20, "My kitchen", "78x60 cms.", 190, "img/cocina-20.webp");

const viniles = [ vajilla, cenefa, bonAppetit,  food,  laCocina,  pizca,  chef,  ingrediente,  panza,  electro,  kitchen,  hambre,  bonAppetitDos,  ifYou,
  chefDos, cocina, vida, hoy, cocinaDos, myKitchen,];

let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorViniles = document.getElementById("contenedorViniles");

const verProductos = () => {
  viniles.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add( "col-xxl-3", "col-xl-3", "col-lg-4",  "col-md-5",  "col-xs-10" );
    card.innerHTML = `
              <div class="cards">
                      <img src="${producto.img}" class= "card-img-top imgViniles " alt= "${producto.nombre}">
                      <div class = "card-body">
                          <h5> ${producto.nombre} </h5>
                          <p> ${producto.medida} </p>
                          <p> $${producto.precio} </p>
                          <button class="btn-carrito" id="boton${producto.id}">Agregar al Carrito</button>
                     </div>
               </div>
    `;

    contenedorViniles.appendChild(card);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};
verProductos();

const agregarAlCarrito = (id) => {
  const productoEnCarrito = carrito.find(producto => producto.id === id);

  if (productoEnCarrito) {
       productoEnCarrito.cantidad++;
  } else {
    const producto = viniles.find(producto => producto.id === id);
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotal();  
};

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add( "col-xxl-3", "col-xl-3", "col-lg-4", "col-md-5", "col-xs-10" );
    card.innerHTML = `
                <div class="cards">
                      <img src="${producto.img}" class= "card-img-top imgViniles " alt= "${producto.nombre}">
                      <div class = "card-body">
                          <h5> ${producto.nombre} </h5>
                          <p> ${producto.medida} </p>
                          <p> $${producto.precio} </p>
                          <p> ${producto.cantidad} </p>
                          <button class="btn-carrito" id="eliminar${producto.id}" > Eliminar Producto </button>
                      </div>
                 </div>
                        `

    contenedorCarrito.appendChild(card);

     const boton = document.getElementById(`eliminar${producto.id}`);
     boton.addEventListener("click", () => {
       eliminarDelCarrito(producto.id);
     });


  });
  calcularTotal();
};

const eliminarDelCarrito = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  mostrarCarrito();

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  eliminarTodoElCarrito();
});

const eliminarTodoElCarrito = () => {
  carrito = [];
  mostrarCarrito();

  localStorage.clear();
};

const total = document.getElementById("total");

const calcularTotal = () => {
  let totalCompra = 0;

  carrito.forEach((producto) => {
    totalCompra += producto.precio * producto.cantidad;
  });
  total.innerHTML = `Total: $${totalCompra}`;
};


const botonDark = document.getElementById("botonDark");

botonDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("modo", "dark");
  } else {
    localStorage.setItem("modo", "light");
  }
});


const modo = localStorage.getItem("modo");
if (modo === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}