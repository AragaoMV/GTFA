import { Injectable } from '@angular/core';
import { DefTatica } from './defesa.model';

@Injectable({
  providedIn: 'root'
})
export class DefesaService {

  private defTaticas: DefTatica[] = [
    {
      id: "cover",
      titulo: "Cobertura",
      imagem: 'https://i.imgur.com/xWW1zfU.gif',
      texto: "Cobertura é um tipo de tática defensiva onde o jogador defensor defende apenas uma regiao, ou zona do campo"
    },
    {
      id: "m2m",
      titulo: "Homem-contra-Homem",
      imagem:'https://i.imgur.com/Gz74TTY.gif',
      texto: "Defesa Homem contra homem é quando o defesor é responsavel pela marcação de apenas um jogador."
    },
    {
      id:'int',
      titulo:'Interceptação',
      imagem:'https://i.imgur.com/zTDawrz.gif',
      texto:'A interceptação ocorre quando o defessor consegue pegar a bola enquanto no ar, fazendo com que a posse de bola passe agora para o seu time, caso a pessoa que interceptar o passe corra para a Endzone, a jogada se resutara em TouchDown para sua equipe, jogada conhecida como Pick 6, se a interceptação acontecer e o jogador cair dentro da própria endzone, e ele não tiver saído dela com a bola, a jogada resultará em um touchback',
    },
    {
      id:'fumble',
      titulo:'Fumble',
      imagem:'https://thumbs.gfycat.com/AcidicInsecureChamois-max-1mb.gif',
      texto:'O Fumble ocorre quando um jogador, que tem a posse e controle da bola deixa ela cair. Pela regra, em qualquer situação, passando, chutando ou dando a bola ao running back, pode resultar num fumble. Jogadas onde o passe do QB vai para trás de onde ele estava caso seja incompleto, também conta como um fumble, tornando a bola de quem pegar',
    },
    {
      id:'safety',
      titulo:'Safety',
      imagem:'https://media.giphy.com/media/9S1uPqZqzTvZz7wa24/source.gif',
      texto:'O Safety é uma espécie de gol-contra do futebol americano, ele ocorre quando o jogador que está com a bola saia de campo pela linha de fundo do próprio campo, ou seja derrubado dentro da Endzone. A jogada resultará em 2 pontos para a equipe advesária mais a posse de bola que será devolvida com um punt.',
    },
    {
      id:'tackle',
      titulo:'Tackle',
      imagem:'https://ligados32.lance.com.br/wp-content/uploads/2020/08/high-school-1078x516.png',
      texto:'O tackle é o movimento de derrubar o jogador que está com a bola, resultando na iterrupção da jogada. O tackle é o principal movimento de um jogador de defesa.',
    },
    {
      id:'sack',
      titulo:'Sack',
      imagem:'https://media.giphy.com/media/l1J9ODSyFkZgzzoSQ/source.gif',
      texto:'O sack é uma jogada da defesa que ocorre quando o Quarterback é derubado atras da linha de scrimmage com a bola, a jogada resulta em perdas de jardas e é uma das jogadas mais importantes para o jogador de linha defensiva.',
    },
    {
      id:'box',
      titulo:'Front7/Box',
      imagem:'https://i.imgur.com/iFuRndo.png',
      texto:'A tackle box, ou front 7 á a regiao que conta tanto a linha defensiva quanto os linebackers, consiste na região mais fisica do jogo, ela é formada pelos DLs e LBs.',
    },
    {
      id:'34',
      titulo:'Formação 3-4',
      imagem:'https://i.imgur.com/OlxiNKz.jpg',
      texto:'Uma defesa que joga em 3-4 abre mão de mais um jogador atacando a linha ofensiva para cobrir mais do meio do campo colocando um LB a mais. Geralmeente é usada para reforçar o segundo nível de defesa.',
    },
    {
      id:'43',
      titulo:'Formação 4-3',
      imagem:'https://i.imgur.com/k7JLHnH.png',
      texto:'4-3 é a formação mais padrão da defesa, consiste em ter 4 jogadores de linha defensiva e 3 LBs. O 4-3 é mais equilibrado ja que tem um bom numero de DLs atacando a linha ofensiva e 3 jogadores que são resposaveis pelo meio do campo, uma excelente escolha em um plano de jogo mais conservador.',
    },
    {
      id:'blitz',
      titulo:'Blitz',
      imagem:'https://i.imgur.com/LmxvNEj.jpg',
      texto:'Na blitz, o time de defesa abdica de um ou mais jogadores no lado defensivo para atacar a bola, utilizando de gaps. A blitz é uma jogada agressiva da defesa, porém caso a blitz não funcione ela pode ser punida pelo time de ataque ja quea defesa acaba abrindo um espaço no campo.',
    },
  ];

  constructor() { }

  getAllDefTaticas(){
    return [...this.defTaticas];
  }
  getDefTatica(defTaticaId: string){
    return {
    ...this.defTaticas.find(defTatica =>{
      return defTatica.id === defTaticaId;
    })};
  }
}


