export class Dado {
    public puntos: number;

    lanzar(): void {
        this.puntos = Math.floor(Math.random() * 6) + 1;

    }
}