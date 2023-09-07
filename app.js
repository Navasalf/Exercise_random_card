
// Array de excusas 

let pintas = ['♦', '♥', '♠', '♣'];

function randomcard() {


    const randomnumber = Math.floor(Math.random() * 8) + 1;
    document.getElementById("cardcenter").innerHTML = randomnumber;

    let span1 = document.getElementById("figura1")
    let span2 = document.getElementById("figura2")

    let randompintas = pintas[Math.floor(Math.random() * pintas.length)];

    let pintaSeleccionada = randompintas

    if (pintaSeleccionada === '♠' || pintaSeleccionada === '♥') {
        span1.style.color = 'red'; span2.style.color = 'red';
    } else {
        span1.style.color = 'black';
    }

    document.getElementById("figura1").innerHTML = pintaSeleccionada
    document.getElementById("figura2").innerHTML = pintaSeleccionada
}

