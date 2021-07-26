import { Injectable } from '@angular/core';
import { Tatica } from './tatica.model';


@Injectable({
  providedIn: 'root'
})
export class AtaqueService {

  private taticas: Tatica[]= [
    {
      id:"wrrt",
      titulo: 'Rotas',
      imagem:'https://i.imgur.com/zIErieH.jpg',
      texto:'A árvore de rotas são as rotas feita pelos WRs de acordo com o livro de jogadas. Rotas: 1-Flat, 2-Slant, 3-Comeback, 4-Curl, 5-Out, 6-In, 7-Corner, 8-Post, 9-Vertical/Fly/Fade.'
    },
    {
      id:'rpo',
      titulo: 'Run-Pass Option',
      imagem:'https://j.gifs.com/wV3pzm.gif',
      texto:'O RPO ou Run-Pass Option, é um estilo de jogado onde ela pode ser tanto corrida, tanto passe, de acordo com o que o QB achar melhor baseado na leitura de jogo'
    },
    {
      id:'spread',
      titulo:'Spread Offense',
      imagem:'https://i.imgur.com/r9FlTW3.gif',
      texto:'O spread offense é um conceito de ataque, sua caracterista é focar em passes e expalhar o campo. Com a grande quantidade de formações e movimentações, dificulta a tomada de decisão da defesa pois ela terá que espalhar no campo para tentar combrir todo o campo, deixando um espaço, onde geralmente será o foco do ataque. O jogo corrido no spread tende a funcionar bem que ja a defesa estara condicionada a proteger passes, fazendo com que crie mais espaço para a corrida. O uso de no-hudles é crucial para o Spread, ja que vc da mesnos tempo para a defesa se preparar para cada jogada.',
    },
    {
      id:'playaction',
      titulo:'Play Action',
      imagem:'https://i.imgur.com/CBo10af.gif',
      texto:'O play action é arma mais letal quando nós falamos do lado ofensivo do jogo, o bom uso do play action faz com que tanto seu jogo corrido, quanto seu jogo aéreo funcione, no play action o QB finge entregar a bola para o corredor, fazendo com que a defesa tenha que morder a isca de que é uma corrida enquanto os recebedores conseguem espaço para a corrida. Ter um QB que faça o mesmo movimento entregando a bola, quanto no play action, faz com que a defesa tenha cada vez mais dificuldade em como reagir na jogada.',
    },
    {
      id:'corrida',
      titulo:'Corrida',
      imagem:'https://i.imgur.com/26WCDkZ.gif',
      texto:'O jogo corrido foi por muitos anos o principal esquema de jogo do futebol americano, sendo usado mais como um estilo usado para aliviar o jogo aéreo, os time que ainda o têm como principal arma geralmente tem corredores fora da curva. No jogo corrido o QB entrega a bola para o RB, que avança o maximo de jardas que conseguir. Existem diversas maneiras de como o QB pode entregar essa bola, o mais comum é o handoff, onde o QB entrega a bola no peito do corredor; o toss, geralmente usados quando a corrido for em direão a linha lateral do campo, o QB joga a bola lateralmente para o RB que deve receber a bola e avançar. ',
    },
    {
      id:'conceitocorrida',
      titulo:'Conceitos de corrida',
      imagem:'https://i.imgur.com/7T16TkN.gif',
      texto:'DIVE: No dive, o corredor recebe a bola e corre por dentro da linha ofensiva, passando pelos Gaps 1 a 4. COUNTER: Na counter o corredor inicia o movimento da corrida indo em direção a um lado e depois corta para o lado da corrida. JET SWEEP: O jet sweep geralmente é uma corrida feita pelo Slot Receiver,ela ocorre nos Gaps 7 ou 8. STRETCH: A stretch é parecida com o jet sweep porém executada pelo RB. READ OPTION: Corrida feita pelo QB, ele faz a leitura do campo para saber qual corrida será melhor, a dele ou a do RB. DRAW: No draw o QB inicia o movimento de passe, indusindo a defesa a recuar e então entrega a bola para o RB que avança tendo um bom espaço para desenvolver a jogada.',
    },
    {
      id:'block',
      titulo:'Bloqueio',
      imagem:'https://i.imgur.com/OjDeAzB.gif',
      texto:'Os bloqueios são partes fundamentais no ataque do futebol americano, quanto melhor os bloqueios melhor são as execussões das jogadas, com um bom bloqueio abrindo os gaps, o corredor consegue sempre um grande avanço, em uma jogada de passe, um bom bloqueio da mais tempo e conforto para o QB pensar e executar a jogada. A linha ofensiva é a principal posição dos bloqueios, mas tanto o WR quanto os TE e RB devem saber executar bloqueios para melhor desenvolvimento das jogadas',
    },
    {
      id:'gap',
      titulo:'Gap',
      imagem:'https://i.imgur.com/XgMGd9s.png',
      texto:'Os GAPS são os espaços entre os jogadores de linha ofensiva, esses espaços espaços, são usados como caminhos para o RB desenvolver sua jogada, o jogador de linha ofensiva para abrir esses gaps devem utilizar dos conceitos escolhidos na jogada conforme o livro de jogadas.',
    },
    {
      id:'conceptblock',
      titulo:'Conceitos de Bloqueio',
      imagem:'https://i.imgur.com/NkgWWkA.gif',
      texto:'CRACK BLOCK: A função do crack block é para o jogador de segundo nível do front da defesa. DOWN BLOCK: No down block o defensor deve enpurrar o adversário no lado contrário de onde a jogada esta sendo executanda, abrindo assim o Gap para o RB correr com a bola. DRIVE BLOCK: No drive block o jogador deve apenas empurrar na vertical o defensor parando o seu avanço. KICKOUT BLOCK: No kickout block o jogador tem a função de parar o defensor que entra dentro do pocket, ou que venho pelos cantos para impedir a jogada. LEAD BLOCK: No lead block o jogador de linha avança para o segundo nível da defesa, liderando a corrida e ajudando no ganho extra de jardas. REACH BLOCK: No reach block o jogador de linha deve bloquear o jogador que não esta alinhado com ele, saindo lateralmente e empurrando-o para impedir seu avanço.',
    },
 ];

  constructor() { }


  getAllTaticas(){
    return[...this.taticas];
  }

  getTatica(taticaId: string) {
    return {
      ...this.taticas.find(tatica => {
      return tatica.id === taticaId;
    })};
  }

}
