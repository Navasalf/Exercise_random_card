
// Array de excusas 

let pintas = ['♦', '♥', '♠', '♣'];

function randomcard() {

    const randomnumber = Math.floor(Math.random() * 8) + 1;
    document.getElementById("cardcenter").innerHTML = randomnumber;

    let span1 = document.getElementById("figura1")
    let span2 = document.getElementById("figura2")

    let randompintas = pintas[Math.floor(Math.random() * pintas.length)];

    let pintaSeleccionada = randompintas

    if (pintaSeleccionada === '♥') {
        span2.style.color = 'red'; span1.style.color = 'red'
    } else {
        span1.style.color = 'black';
    }

    document.getElementById("figura2").innerHTML = pintaSeleccionada
    document.getElementById("figura1").innerHTML = pintaSeleccionada
}

let miboton = document.getElementById("mybutton")
miboton.addEventListener("click",randomcard)

setInterval(randomcard,10000)



const form = document.getElementById('Dimensiones');
form.addEventListener('submit', function(event) {
  event.preventDefault();


  const alto = parseInt(document.getElementById('alto').value);
  const ancho = parseInt(document.getElementById('ancho').value);

 
  const carta = document.getElementById('cartita');
  carta.style.height = `${alto}px`;
  carta.style.width = `${ancho}px`;


  form.reset();
});



