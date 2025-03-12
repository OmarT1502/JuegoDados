export class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntoGanado = 0;
    }
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        console.log("suma: ", dado1.puntos + dado2.puntos);
        return dado1.puntos + dado2.puntos;
    }
}
