//3. Crea un documento html que solicite al usuario un número y se escriba en el documento la suma de los números del 1 al número introducido 
//(por ejemplo si introduce un 4, escribirá en el documento "La suma de los números del 1 al 4 es 10"). 
//Comprueba previamente que han introducido un número y no una letra, para ello investiga el uso de la función isNaN, y muestra un error en este caso.


let numero = prompt("Introduce un número");
let suma = 0;
let resultado = 0;

//esta funcion nos devuelve true si recibe una cadena, si no es cadena salta a ejecutar el else de la condicional
if (isNaN(numero)) {
    console.log("El valor introducido no es un número, pulsa F5 e intentalo de nuevo");
    } else {
        for (let i = 0; i < numero; i++) {
            suma =  i + 1;
            resultado = suma + resultado;
        }
        console.log("La suma de los números del 1 al " + numero + " es " + resultado);
}

