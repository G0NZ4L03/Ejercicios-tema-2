//5. Crea un documento html que solicite al usuario un número No y escriba en el documento No tablas de multiplicar, 
//de los n primeros números (por ejemplo si introducen el 6, mostraremos las tablas del 1, 2, 3, 4, 5, y 6)

let num = prompt("Dime un número");
num = parseInt(num);

for (let i = 1; i <= num; i++) {
    //Anido un bucle for dentro de otro para que haga las tablas tantas veces como el numero introducido
    console.log("Tabla del "+i);
    for (let j = 1; j <= 10; j++) {
        console.log(i+" x "+j + " = "+ (j*i));
    }
}
