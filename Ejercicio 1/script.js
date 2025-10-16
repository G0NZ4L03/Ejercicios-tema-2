//1. Crea un documento html que solicite un nombre, la edad 
//y escriba en el documento el mensaje: 
//"Hola ____, tienes ____ años, eres ---(mayor/menor) de edad.


const MAYORIAEDAD = 18;

let nombre= prompt("Introduce tu nombre:");
let edad = prompt("Introduce tu edad:");
let comprobacionEdad;

//Con la comprobación IF cambio solo la palabra que pondré en el mensaje final
if (edad >= MAYORIAEDAD) {
    comprobacionEdad = "mayor";
} else {
    comprobacionEdad  = "menor";
}

console.log("Hola " + nombre + ", tienes " + edad + " años y eres " + comprobacionEdad + " de edad.");
