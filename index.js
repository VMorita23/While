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

function capturarNumeros() {
    const numeros = [];
    let numero;

    do {
        numero = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));
        if (!isNaN(numero) && numero !== 0) {
            numeros.push(numero);
        }
    } while (numero !== 0);

    console.log("Lista de números capturados:", numeros);
}

capturarNumeros();

// Ejercicio 4 --------------------------------------------------------->

function capturarPalabras() {
    const palabras = [];
    let entrada;

    do {
        entrada = prompt("Ingresa una palabra o letra (presiona 'Cancelar' o 'Aceptar' sin escribir nada para terminar):");
        if (entrada !== null && entrada !== "") {
            palabras.push(entrada);
        }
    } while (entrada !== null && entrada !== "");

    const resultado = palabras.join('');
    console.log("Palabras capturadas y concatenadas:", resultado);
}

capturarPalabras();

// Ejercicio 5 --------------------------------------------------------->

function mensajesPorDia() {
    let dia;

    do {
        dia = prompt("Ingresa un día de la semana (ej: lunes, jueves, domingo, etc):");

        if (dia) {
            switch (dia.toLowerCase()) {
                case "lunes":
                    alert("¡Ánimo, es lunes!");
                    break;
                case "viernes":
                    alert("¡Es viernes y el cuerpo lo sabe!");
                    break;
                case "domingo":
                    alert("Ve a descansar");
                    break;
                default:
                    alert(`¡Feliz ${dia}!`);
            }
        }
    } while (dia && dia.toLowerCase() !== "domingo");
}

mensajesPorDia();