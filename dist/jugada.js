export class Jugada {
    iniciarJugada(jugador1, jugador2, dado1, dado2) {
        let puntosJ1;
        let puntosJ2;
        puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);
    }
    turnarJugador(jugadorEnTurno, d1, d2) {
        return jugadorEnTurno.lanzaDados(d1, d2);
    }
    determinarGanador(j1, j2, pJ1, pJ2) {
        if (pJ1 == 7) {
            j1.puntoGanado = 1;
        }
        else {
            j1.puntoGanado = 0;
        }
        if (pJ2 == 7) {
            j2.puntoGanado = 1;
        }
        else {
            j2.puntoGanado = 0;
        }
    }
}
