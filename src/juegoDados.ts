import { Jugador } from "./jugador";
import { Dado } from "./dado";
import { Jugada } from "./jugada";

export class JuegoDados {
    cantidadJugadas: number;
    jugador1: Jugador;
    jugador2: Jugador;
    marcadorJugador1: number;
    marcadorJugador2: number;
    dado1: Dado;
    dado2: Dado;
    vencedor: Jugador;
    private bandJugador: boolean;

    constructor (nombreJugador1: string, nombreJugador2: string) {
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
    }

    elegirPrimerLanzador(): void {
        if((Number) (Math.random() * (3 - 1) == 1)) {
            this.bandJugador = true;
        } 
        else{
            this.bandJugador = false;
        }
    }

    public iniciarJugada (): void {
        let jugadaActual: Jugada = new Jugada();

        if(this.bandJugador) {
            jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2)
        } 
        else {
            jugadaActual.iniciarJugada(this.jugador2, this.jugador1, this.dado1, this.dado2)
        }

        this.marcadorJugador1 = this.marcadorJugador1 + this.jugador1.puntoGanado;
        this.marcadorJugador2 = this.marcadorJugador2 + this.jugador2.puntoGanado;
    }

    public iniciarJuego(): void {
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        
        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;

        this.elegirPrimerLanzador();

        do {
            this.iniciarJugada();
            this.cantidadJugadas++;

            console.log(`Num de jugada ${this.cantidadJugadas} puntaje jugador 1: ${this.marcadorJugador1} puntaje jugador 2: ${this.marcadorJugador2}`);

        } while((this.marcadorJugador1 != 5) && (this.marcadorJugador2 != 5));

        //Verificar el ganador
        this.vencedor = this.determinarVencedor();
    }

    public determinarVencedor(): Jugador {
        //Empate
        if((this.marcadorJugador1 == 5) && (this.marcadorJugador2 == 5)) {
            return null;
        }

        if(this.marcadorJugador1 == 5) {
            return this.jugador1;
        }
        else {
            return this.jugador2;
        }
        return null
    }
}