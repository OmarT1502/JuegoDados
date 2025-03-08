import { Dado } from "./dado";
import { Jugador } from "./jugador";

export class Jugada {

    iniciarJugada(jugador1: Jugador, jugador2: Jugador, dado1: Dado, dado2: Dado): void {
        let puntosJ1: number;
        let puntosJ2: number;

        puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);


    }

    private turnarJugador(jugadorEnTurno: Jugador, d1: Dado, d2: Dado): number {
        return jugadorEnTurno.lanzaDados(d1, d2);
    }

    public determinarGanador(j1: Jugador, j2: Jugador, pJ1: number, pJ2: number): void {
        if (pJ1 == 7) {
            j1.puntoGanado = 1;
        } else {
            j1.puntoGanado = 0;
        }

        if(pJ2 == 7) {
            j2.puntoGanado = 1;
        } else {
            j2.puntoGanado = 0;
        }
    }
}