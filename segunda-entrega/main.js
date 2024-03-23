let carritoTotal = 0;

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let stickerCocina = new Producto("Sticker Cocina", 250);
let stickerSala = new Producto("Sticker Sala", 320);
let stickerComedor = new Producto("Sticker Comedor", 450);
let stickerGamer = new Producto("Sticker Gamer", 200);
let stickerRecamara = new Producto("Sticker Recamara", 380);

const arrStickers = [
  stickerCocina,
  stickerSala,
  stickerComedor,
  stickerGamer,
  stickerRecamara,
];

function comprar() {
  let modelos = parseInt(
    prompt(
      `Pulse 1 si deseas comprar un ${arrStickers[0].nombre} por $${arrStickers[0].precio}\nPulse 2 si deseas comprar un ${arrStickers[1].nombre} por $${arrStickers[1].precio}\nPulse 3 si deseas comprar un ${arrStickers[2].nombre} por $${arrStickers[2].precio}\nPulse 4 si deseas comprar un ${arrStickers[3].nombre} por $${arrStickers[3].precio}\nPulse 5 si deseas comprar un ${arrStickers[4].nombre} por $${arrStickers[4].precio}\nPulse 6 si deseas filtrar por precio más bajo`)
  );

  while (modelos < 1 || modelos > 6) {
    modelos = parseInt(
      prompt(
        `Pulse 1 si deseas comprar un ${arrStickers[0].nombre} por $${arrStickers[0].precio}\nPulse 2 si deseas comprar un ${arrStickers[1].nombre} por $${arrStickers[1].precio}\nPulse 3 si deseas comprar un ${arrStickers[2].nombre} por $${arrStickers[2].precio}\nPulse 4 si deseas comprar un ${arrStickers[3].nombre} por $${arrStickers[3].precio}\nPulse 5 si deseas comprar un ${arrStickers[4].nombre} por $${arrStickers[4].precio}\nPulse 6 si deseas filtrar por precio más bajo`)
    );
  }

  let productoSeleccionado;
  if (modelos === 1) {
    productoSeleccionado = arrStickers[0];
    carritoTotal += arrStickers[0].precio;
  } else if (modelos === 2) {
    productoSeleccionado = arrStickers[1];
    carritoTotal += arrStickers[1].precio;
  } else if (modelos === 3) {
    productoSeleccionado = arrStickers[2];
    carritoTotal += arrStickers[2].precio;
  } else if (modelos === 4) {
    productoSeleccionado = arrStickers[3];
    carritoTotal += arrStickers[3].precio;
  } else if (modelos === 5) {
    productoSeleccionado = arrStickers[4];
    carritoTotal += arrStickers[4].precio;
  } else if (modelos === 6) {
    arrStickers.sort((a, b) => a.precio - b.precio);
    modelos = parseInt(
      prompt(
        `Pulse 1 si deseas comprar un ${arrStickers[0].nombre} por $${arrStickers[0].precio}\nPulse 2 si deseas comprar un ${arrStickers[1].nombre} por $${arrStickers[1].precio}\nPulse 3 si deseas comprar un ${arrStickers[2].nombre} por $${arrStickers[2].precio}\nPulse 4 si deseas comprar un ${arrStickers[3].nombre} por $${arrStickers[3].precio}\nPulse 5 si deseas comprar un ${arrStickers[4].nombre} por $${arrStickers[4].precio}`)
    );
    while (modelos < 1 || modelos > 6) {
      modelos = parseInt(
        prompt(
          `Pulse 1 si deseas comprar un ${arrStickers[0].nombre} por $${arrStickers[0].precio}\nPulse 2 si deseas comprar un ${arrStickers[1].nombre} por $${arrStickers[1].precio}\nPulse 3 si deseas comprar un ${arrStickers[2].nombre} por $${arrStickers[2].precio}\nPulse 4 si deseas comprar un ${arrStickers[3].nombre} por $${arrStickers[3].precio}\nPulse 5 si deseas comprar un ${arrStickers[4].nombre} por $${arrStickers[4].precio}`)
      );
    }
    if (modelos === 1) {
      productoSeleccionado = arrStickers[0];
      carritoTotal += arrStickers[0].precio;
    } else if (modelos === 2) {
      productoSeleccionado = arrStickers[1];
      carritoTotal += arrStickers[1].precio;
    } else if (modelos === 3) {
      productoSeleccionado = arrStickers[2];
      carritoTotal += arrStickers[2].precio;
    } else if (modelos === 4) {
      productoSeleccionado = arrStickers[3];
      carritoTotal += arrStickers[3].precio;
    } else if (modelos === 5) {
      productoSeleccionado = arrStickers[4];
      carritoTotal += arrStickers[4].precio;
    }
  }

  let confirmacion = confirm(
    `Usted selecciono ${productoSeleccionado.nombre} y cuesta $${productoSeleccionado.precio}, ¿Desea agregarlo al carrito?`
  );
  if (confirmacion === true) {
    let confirmacion2 = confirm(
      "El producto se agregó de manera correcta al carrito, ¿Desea comprar algo más?"
    );
    if (confirmacion2 === true) {
      comprar();
    } else {
      let confirmacion3 = confirm(
        `El total de u compra es de: $${carritoTotal}, ¿Desea pagar?`
      );
      if (confirmacion3 === true) {
        alert("Gracias por su compra");
      } else {
        alert("Ok, hasta pronto!");
      }
    }
  } else {
    let confirmacion4 = confirm("Vas a seguir comprando");
    if (confirmacion4 === true) {
      comprar();
    } else {
      alert("Ok, hasta pronto!");
    }
  }
};

comprar();
