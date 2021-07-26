import { Injectable } from '@angular/core';
import {DetalheGeral } from './inicio.model';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private detalheGeral: DetalheGeral[] = [
    {
      id: "campo",
      titulo: "Campo ",
      imagem: 'https://i.imgur.com/PiNksUh.png',
      texto: " O campo de futebol americano tem 124 jardas(aprimadamente 110 metros) de comprimento, sendo 100 jardas de campo, 10 jardas pra cada endzone e 2 para cada goal post e 53 jardas(aproximadamente 48 metros) de largura, o campo é composto por linhas que marcam de 5 em 5 jardas ou de 10 em 10 (dependedo do campo), e dentro do campo possuem pequenas marcações chamadas de Hashmaks que marcam de 1 em 1 jarda. A endzone é a zona de potuação onde ao chegar lá o jogador irá pontuar 6 pontos para sua equipe."
    },
    {
      id: "equipamento",
      titulo: "Equipamentos",
      imagem:'https://i.imgur.com/VU8wDnd.jpg',
      texto: "Por ser um esporte de contato, os equipamentos são parte crucial da segurança no esporte, os principais equipamentos são: Capacete, Shoulder Pad(Protetores de ombro), protetor bocal, calça 7 pieces (Calça de proteção que possui epécies de espumas no cóccix, coxas, joelhos e uma em cada lado da bacia) meias e chuteira.",
    },
    {
      id:"arbitros",
      titulo:"Arbitragem",
      imagem:'https://i.imgur.com/9NVUhKN.jpg',
      texto: "O futebol americano geralmente é composto por 7 arbitros sendo 1 o árbitro princiapl que pode ser identificado por usar um boné na coloração branca, enquanto os outros árbritros usam um boné preto, cada árbitro tem uma função no campo como: identificar e posicionar a bola, identificar o posicionamento dos jogadores, árbitro de linha, árbitro de fundo do campo e árbitro das laterais do campo. ",
    },
    {
      id:"bola ",
      titulo:"Bola",
      imagem:' https://i.imgur.com/blGl84X.png',
      texto: " A bola usada no futebol americano tem o formato oval com as pontas mais pontiagudas, esse formato serve para melhorar a aerodinâmica da bola durante um passe, a bola pode ser feita de diversos materias sendo borracha e couro pintado os mais comuns.",
    },
    {
      id:"tempos",
      titulo:"Tempos",
      imagem:'https://s2.glbimg.com/owtdi8paTiim-M0HJBA1IN2JG08=/0x0:690x484/600x0/smart/filters:gifv():strip_icc()/s.glbimg.com/es/ge/f/original/2017/09/06/tempo-de-jogo.jpg ',
      texto: " O futebol americano tem uma duração de 60 minutos dividos em 4 Quartos de 15 minutos, cada time tem 40 segundos entre cada jogada, podendo ser penalizado se o tempo for estourado. Para parar o tempo basta a bola sair de campo, ou a jogada resultar em um passe incompleto, eu outras situações e possível de o treinador solicitar um tempo técnico, durando 1 minuto, onde o tempo é parado, porém cada time só pode ter direito a 3 tempos por metade de jogo. ",
    },
    {
      id:"pontuacao",
      titulo:"Pontuação",
      imagem:'https://i.imgur.com/QFHyOoX.gif',
      texto: " Existem 4 maneiras de se conseguir uma pontuação no futebol americano, sendo o TouchDown o máximo que se opode conseguir dando 6 pontos. Após se conseguir um touchdown o time atacante pode escolher um chute livre, valendo 1 ponto extra, ou uma jogada a mais valendo 2 pontos extras. Se o time atacante não conseguir chegar na End Zone dentro de suas decidas,  ele pode tentar um chute valendo 3 pontos, é possivel também um time cometer um Safety, o que seria uma especie de 'gol contra' onde o jogador que esta com a bola é derubado dentro da própria End zone, ou sai de campo pela linha de fundo do próprio campo. Ganha no futebol americano a equipe que mais tiver pontuado dentro do tempo. ",
    }
  ];

  constructor() { }

  getAllDetalheGeral(){
    return [...this.detalheGeral];
  }
  getDetalheGeral(detalheGeralId: string){
    return {
    ...this.detalheGeral.find(detalheGeral =>{
      return detalheGeral.id === detalheGeralId;
    })};
  }
}
