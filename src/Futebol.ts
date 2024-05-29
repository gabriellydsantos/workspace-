import { Time } from "./Time";

export class Jogo {
    timeA: Time;
    timeB: Time;
    vencedor: Time;

    constructor(timeA: Time, timeB: Time) {
        this.timeA = timeA
        this.timeB = timeB
    }

    determinarVencedor(): string {
        if (this.timeA.gol > this.timeB.gol) {
            this.vencedor = this.timeA;
            return this.timeA.nome + " venceu!";
        }
        if (this.timeB.gol > this.timeA.gol) {
            this.vencedor = this.timeB;
            return this.timeB.nome + " venceu!";
        }
        return "EMPATE!";
    }

    getVencedor(): Time {
        return this.vencedor
    }
}
