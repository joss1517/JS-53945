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
