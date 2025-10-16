//4. Escribe un documento html que permita ir introduciendo una serie indeterminada de números mientras su suma 
//no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

let numero = 0;
let contador = 0;

//Uso el bucle do while para hacer un bucle indefinido mientras la suma no sea mayor que 50
do {
    //Aqui me veo obligado a forzar que el valor sea numerico ya que prompt me lo concatena como string en vez al sumar
  numero = numero + parseInt(prompt("Introduce un número"));
  contador++;
} while (numero < 50);

console.log("Se han introducido " + contador + " números y la suma total es " + numero);
