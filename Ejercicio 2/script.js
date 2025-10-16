//2. Crea un documento html que solicite al usuario tres números por separado, 
//y se escriba en el documento cual de los números introducidos es mayor.

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
let num3 = prompt("Introduce el tercer número:");

let mayor; //Genero esta variable como auxiliar

if (num1>num2 && num1>num3) {
    mayor= num1;
} else if (num2>num1 && num2>num3) {
    mayor= num2;
} else {
    mayor= num3;
}

console.log("El número mas alto es: " + mayor);
