import { JuegoDados } from "./juegoDados.js";
let jugador1 = document.getElementById("nombre1");
let jugador2 = document.getElementById("nombre2");
let formulario = document.getElementById("form");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let juego = new JuegoDados(jugador1.value, jugador2.value);
    console.log(jugador1.value, jugador2.value);
    juego.iniciarJuego();
    if (juego.vencedor == null) {
        console.log("Es un empate");
    }
    else {
        console.log(`${juego.vencedor.nombre} ha ganado`);
    }
});
