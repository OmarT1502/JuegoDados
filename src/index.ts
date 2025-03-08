import { JuegoDados } from "./juegoDados";

let jugador1 = document.getElementById("nombre1") as HTMLInputElement;
let jugador2 = document.getElementById("nombre2") as HTMLInputElement;
let formulario = document.getElementById("form") as HTMLFormElement;

let juego: JuegoDados = new JuegoDados(jugador1.value, jugador2.value);
    
formulario.addEventListener("submit", function(event) {
     event.preventDefault();

     console.log(jugador1.value, jugador2.value);
     juego.iniciarJuego();

     if(juego.vencedor == null) {
        alert("Es un empate");
     }
     else {
        alert(`${juego.vencedor.nombre} ha ganado`);
     }
})