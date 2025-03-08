export class Dado {
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
