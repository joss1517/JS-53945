function calculadora(num1, operacion, num2) {
  switch (operacion) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
      break;

    default:
      return alert("operación no reconocida");
      break;
  }
}

let num1 = parseFloat(prompt("Ingresa el primer número"));
let operacion = prompt("Ingresa la operación");
let num2 = parseFloat(prompt("Ingresa el segundo número"));

let resultado1 = calculadora(num1, operacion, num2);

alert(`El resultado es:\n ${num1} ${operacion} ${num2} = ${resultado1}`);

const invertirPalabra = (palabra = "") => {
  if (palabra === "") return "No ingresaste una palabra, frase o número";

  if (typeof palabra !== "string") return "El valor ingresado no es válido";

  return `${palabra.split("").reverse().join("")}`;
};

let palabra = prompt("Ingresa una palabra, frase o número a invertir:");
let resultado = invertirPalabra(palabra);

alert(`Palabra ingresada: "${palabra}"\nPalabra invertida: "${resultado}"`);

// function invertirPalabra(palabra) {
//   if (palabra === "") {
//     return "No ingresaste una palabra, frase o número";
//   } else if (typeof palabra !== "string") {
//     return "El valor ingresado no es válido";
//   } else {
//     return `${palabra.split("").reverse().join("")}`;
//   }
// }

// let palabra = prompt("Ingresa una palabra, frase o número invertir");
// let resultado = invertirPalabra(palabra);

// alert(`Palabra ingresada: "${palabra}"\nPalabra invertida: "${resultado}"`);

//  ******************************* PRUEBAS ************************************
// const invertirPalabra = (palabra = "") => {
//   if (palabra === "") return "No ingresaste una palabra o frase";

//   if (typeof palabra !== "string") return `la palabra no es valida`;

//   if (palabra === "number") return;
//   `El valor "${palabra}"que ingresaste no es un palabra o frase`;

//   return palabra.split("").reverse().join("");
// };

// let palabra = prompt("Ingresa una palabra o frase a invertir");
// let resultado = invertirPalabra(palabra);

// alert(`Palabra ingresada: "${palabra}"\nPalabra invertida "${resultado}"`);
// if (typeof palabra === "number") {
//   alert(`El valor "${palabra}"que ingresaste no es un palabra o frase`);
// } else {
//   alert(`Palabra ingresada: "${palabra}"\nPalabra invertida: "${resultado}"`);
// }

// const invertirPalabra = (palabra = "") => {
//   if (palabra === "") return "No ingresaste una palabra o frase";

//   if (typeof palabra !== "string")
//     return `La palabra "${palabra}" no es válida`;

//   if (palabra === "number")
//     return `El valor "${palabra}" que ingresaste no es una palabra o frase`;

//   // return palabra.split("").reverse().join("");
//   return `Palabra ingresada: ${palabra} \nPalabra invertida: ${palabra
//     .split("")
//     .reverse()
//     .join("")}`;
// };

// let palabra = prompt("Ingresa una palabra o frase a invertir");
// let resultado = invertirPalabra(palabra);

// if (typeof resultado === "string") {
//   alert(resultado);
// } else {
//   alert(`Palabra ingresada: "${palabra}"\nPalabra invertida: "${resultado}"`);
// }

// function invertirPalabra(palabra) {
//   if (palabra === "") {
//     return "No ingresaste una palabra o frase";
//   } else if (typeof palabra !== "string") {
//     return "El valor ingresado no es valido";
//   } else if (typeof palabra === "string") {
//     return `${palabra.split("").reverse().join("")}`;
//   } else if (palabra === "number") {
//     return "No se aceptan numeros";
//   }
// }

// let palabra = prompt("Ingresa una palabra o frase a invertir");
// let resultado = invertirPalabra(palabra);
// console.info(
//   `Palabra ingresada: "${palabra}"\nPalabra invertida: "${resultado}"`
// );
