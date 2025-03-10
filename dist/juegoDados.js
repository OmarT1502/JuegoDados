import { Jugador } from "./jugador.js";
import { Dado } from "./dado.js";
import { Jugada } from "./jugada.js";
export class JuegoDados {
    constructor(nombreJugador1, nombreJugador2) {
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.cantidadJugadas = 0;
        this.bandJugador = true;
    }
    elegirPrimerLanzador() {
        if ((Math.random() * (3 - 1) == 1)) {
            this.bandJugador = true;
        }
        else {
            this.bandJugador = false;
        }
    }
    iniciarJugada() {
        let jugadaActual = new Jugada();
        if (this.bandJugador) {
            jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        }
        else {
            jugadaActual.iniciarJugada(this.jugador2, this.jugador1, this.dado1, this.dado2);
        }
        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;
        console.log("Puntos jugador 1: ", this.marcadorJugador1);
        console.log("Puntos jugador 2: ", this.marcadorJugador2);
    }
    iniciarJuego() {
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.elegirPrimerLanzador();
        do {
            this.iniciarJugada();
            this.cantidadJugadas++;
            console.log(`Num de jugada ${this.cantidadJugadas} puntaje jugador 1: ${this.marcadorJugador1} puntaje jugador 2: ${this.marcadorJugador2}`);
        } while ((this.marcadorJugador1 != 5) && (this.marcadorJugador2 != 5));
        this.vencedor = this.determinarVencedor();
    }
    determinarVencedor() {
        //Empate
        if ((this.marcadorJugador1 == 5) && (this.marcadorJugador2 == 5)) {
            return null;
        }
        if (this.marcadorJugador1 == 5) {
            return this.jugador1;
        }
        else {
            return this.jugador2;
        }
        return null;
    }
}
