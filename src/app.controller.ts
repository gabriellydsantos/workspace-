import { Controller, Get } from '@nestjs/common';
import { Jogo } from './Futebol';
import { Time } from './Time';

@Controller()
export class AppController {


  @Get()
  main(): string {

    const flamengo = new Time("Flamengo", 2)
    const cori = new Time("Corinthias", 1)
    const santos = new Time("Santos", 5)

    const jogo1 = new Jogo(flamengo, santos);
    const vencedorJogo1 = jogo1.getVencedor()


    const jogo2 = new Jogo(cori, vencedorJogo1);



    return "OK";
  }
}
