import { Injectable } from '@angular/core';
import { EspTatica } from './esptatica.model';

@Injectable({
  providedIn: 'root'
})
export class ChuteService {
  private espTaticas: EspTatica [] = [
    {
      id: "ko",
      titulo: "KickOff",
      imagem: 'https://i.imgur.com/a16Zd4R.gif',
      texto: "O lance inical de chute onde se inicia a partida ou onde troca a posse de bola após uma pontuação."
    },
    {
      id:'punt',
      titulo:'Punt',
      imagem:'https://i.imgur.com/PtoEtgM.gif',
      texto:'O punt ocorre quando o time de ataque falha ao conseguir o avanço dentro das 3 tentativas e na 4ª opta por devolver a bola para o outro time, ao fazer isso o Punter chuta a bola o mais longe possivel para fazer com qeu o outro time tenha que avançar mais.',
    },
    {
      id:'tb',
      titulo:'Touchback',
      imagem:'https://i.imgur.com/bVuXxYL.gif',
      texto:'O Touck back ocorre quando o punter ou kicker cuta a bola para o fim do campo, podendo o jogador do time que recebe o chute ajoelhar dentro da end zone, ou se a bola sair do campo PELA LINHA DE FUNDO. Com o touch back o time que agora irá atacar, começará na linha de 25 de jardas.',
    },
    {
      id:'fc',
      titulo:'Fair Catch',
      imagem:'https://i.imgur.com/5vpzgx2.gif',
      texto:'O Fair Catch é um ato feito pelo Retornador onde ele avisa para a arbitragem que não vai correr quando pegar a bola e logo em seguida ajoelha no campo, fazendo com que ele preserve o corpo, ja que não pode ser tocado. Ao pedir o fair catch o jogo iniciará no exato local onde o fair catch foi solicitado.',
    },
    {
      id:'fg',
      titulo:'Fiel Goal',
      imagem:'https://i.imgur.com/rInQxlw.gif',
      texto:'Após a falha nas 3 tentativas de primeira decida e o time estiver perto do Goal Post, o time atacante pode optar pelo Field Goal, se o Kicker acertar a bola dentro do Goal Post ele marcará 3 pontos para a sua equipe e a bola sera devolvida para a outra equipe em um kickoff.',
    },
    {
      id: "ep",
      titulo: "Extra Point",
      imagem: 'https://i.imgur.com/ASsEbLZ.gif',
      texto: "Uma jogada bônus que o time que pontuou recebe, podendo optar pelo chute para +1 ou uma jogada normal para +2 pontos caso convertido."

    },
    {
      id:'onsidekick',
      titulo:'Onside Kick',
      imagem:'https://i.imgur.com/CzEhJvw.gif',
      texto:'Durante o kickoff, o time que chuta pode tentar recuperar a bola usando o onside kick, geralemnte usado quando o time está atrás no placar, aós a bola passar de 10 jardas ela se torna de quem pegar, sendo assim o time que chuta pode tentar recuperar a bola e tendo novamente a posse de bola para tentar pontuar.',
    }
  ]
  constructor() { }

  getAllEspTaticas(){
    return[...this.espTaticas];
  }
  getEspTatica(espTaticaId: string){
    return{
      ...this.espTaticas.find (espTatica =>{
        return espTatica.id === espTaticaId;
      })};
  }
}
