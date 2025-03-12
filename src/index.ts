import { JuegoDados } from "./juegoDados";

document.getElementById("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreJugador1 = (document.getElementById("nombre1") as HTMLInputElement).value;
    const nombreJugador2 = (document.getElementById("nombre2") as HTMLInputElement).value;

    const juego = new JuegoDados(nombreJugador1, nombreJugador2);
    juego.iniciarJuego();

    const jugadasDiv = document.getElementById("jugadas")!;
    const puntosJugador1Span = document.getElementById("puntosJugador1")!;
    const puntosJugador2Span = document.getElementById("puntosJugador2")!;
    const ganadorDiv = document.getElementById("ganador")!;
    const juegoDiv = document.getElementById("juego")!;
    const form = document.getElementById("form")!;

    form.style.display = "none";
    juegoDiv.style.display = "block";

    for (let i = 0; i < juego.cantidadJugadas; i++) {
        jugadasDiv.innerHTML += `<p>Jugada ${i + 1}: Jugador 1: ${juego.marcadorJugador1}, Jugador 2: ${juego.marcadorJugador2}</p>`;
    }

    puntosJugador1Span.textContent = juego.marcadorJugador1.toString();
    puntosJugador2Span.textContent = juego.marcadorJugador2.toString();

    if (juego.vencedor) {
        ganadorDiv.textContent = `Ganador: ${juego.vencedor.nombre}`;
    } else {
        ganadorDiv.textContent = "Empate";
    }
});