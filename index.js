// Ejercicio 1 --------------------------------------------------------->

function multiplos() {
    let number = parseInt(prompt("Ingresa un número:"));
    let i = 1;

    while (i <= number) {
        if (i % 5 === 0) {
            console.log(i);
        }
        i++;
    }
}

let mostrarMultiplos = multiplos()
console.log (mostrarMultiplos);

// Ejercicio 2 --------------------------------------------------------->

function loteria() {
    let numero1 = parseInt(prompt("Ingresa un número entre 1 y 50:"));
    let numero2 = parseInt(prompt("Ingresa otro número entre 1 y 50:"));

    let i = 1;
    while (i <= 50) {
        if (i === numero1 || i === numero2) {
            console.log("¡Lotería!");
        } else {
            console.log(i);
        }
        i++;
    }   
}

let mostrarLoteria = loteria()
console.log (mostrarLoteria);

// Ejercicio 3 --------------------------------------------------------->


// Ejercicio 4 --------------------------------------------------------->


// Ejercicio 5 --------------------------------------------------------->

