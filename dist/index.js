import { JuegoDados } from "./juegoDados.js";
let jugador1 = document.getElementById("nombre1");
let jugador2 = document.getElementById("nombre2");
let formulario = document.getElementById("form");
let juego = new JuegoDados(jugador1.value, jugador2.value);
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(jugador1.value, jugador2.value);
    juego.iniciarJuego();
    if (juego.vencedor == null) {
        alert("Es un empate");
    }
    else {
        alert(`${juego.vencedor.nombre} ha ganado`);
    }
});
