import { JuegoDados } from "./juegoDados";

let jugador1 = document.getElementById("nombre1") as HTMLInputElement;
let jugador2 = document.getElementById("nombre2") as HTMLInputElement;
let formulario = document.getElementById("form") as HTMLFormElement;

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let juego: JuegoDados = new JuegoDados(jugador1.value, jugador2.value);
    
    console.log(jugador1.value, jugador2.value);
    juego.iniciarJuego();

    if (juego.vencedor == null) {
        console.log("Es un empate");
    } else {
        console.log(`${juego.vencedor.nombre} ha ganado`);
    }
});
