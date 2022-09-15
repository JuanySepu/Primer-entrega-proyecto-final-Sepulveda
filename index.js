let min = 0
let max = 20
let numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let intentos = 0
let cantidadJugadores = prompt("Modo de juego:\n 1 - Jugador vs Computadora\n 2 - Jugador 1 vs Jugador 2")
let numero


function calculoIntentosRestantes() {
    let intentosRestantes = 4 - intentos
    return intentosRestantes
}

function unJugador() {
    let nombreJugador = prompt("Ingrese el nombre del Jugador")
    let numeroSecreto = Math.round(Math.random() * 20)
    let numero
    if (numeroSecreto >= min && numeroSecreto <= max) {
        for(intentos; intentos < 5; intentos++) {
            numero = parseInt(prompt(nombreJugador + ", ingresa un número entre el "+min+" y el "+max))
            cantIntententos = calculoIntentosRestantes()
            if(numero >= min && numero <= max) {
                if(numero < numeroSecreto) {
                    alert("El número que ingresaste es más bajo\nTe quedan "+cantIntententos+" intentos")
                } else if (numero > numeroSecreto) {
                    alert("El número que ingresaste es más alto\nTe quedan "+cantIntententos+" intentos")
                }
                else if(numero == numeroSecreto){
                    break
                }
            } else {
                alert("Debe ingresar un número entre "+min+" y "+max)
            }
        }
        if(numero == numeroSecreto) {
            alert("¡Felicitaciones! Adivinaste el número en "+(intentos + 1)+" intentos")
        } else {
            alert("Agotaste el numero de intentos. Suerte para la próxima!")
        }
    } else {
        alert("Debe ingresar un número entre "+min+" y "+max)
    }
}

function dosJugadores() {
    let nombreJugadorUno = prompt("Ingrese el nombre del Jugador 1")
    let nombreJugadorDos = prompt("Ingrese el nombre del Jugador 2")
    let numeroSecreto = prompt(nombreJugadorUno+" elegí un número entre el 0 y el 20 el cual "+nombreJugadorDos+" deberá adivinar\n¡"+nombreJugadorDos+" NO MIRES!" )
    let numero
    let condicion = numeros.some((elemento) => elemento == numeroSecreto)
    if (condicion == true) {
        for(intentos; intentos < 5; intentos++) {
            numero = parseInt(prompt(nombreJugadorDos + ", ingresa un número entre el "+min+" y el "+max))
            cantIntententos = calculoIntentosRestantes()
            if(numero >= min && numero <= max) {
                if(numero < numeroSecreto) {
                    alert("El número que ingresaste es más bajo\nTe quedan "+cantIntententos+" intentos")
                } else if (numero > numeroSecreto) {
                    alert("El número que ingresaste es más alto\nTe quedan "+cantIntententos+" intentos")
                }
                else if(numero == numeroSecreto){
                    break
                }
            } else {
                alert("Debe ingresar un número entre "+min+" y "+max)
            }
        }
        if(numero == numeroSecreto) {
            alert("¡Felicitaciones! Adivinaste el número en "+(intentos + 1)+" intentos")
        } else {
            alert("Agotaste el numero de intentos. Suerte para la próxima!")
        }
    } else {
        alert("Debe ingresar un número entre "+min+" y "+max)
    }
}


if (cantidadJugadores == 1) {
    unJugador()
}else if (cantidadJugadores == 2) {
    dosJugadores()
}else{
    alert("Opción no válida")
}