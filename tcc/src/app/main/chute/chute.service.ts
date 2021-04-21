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
      imagem: "",
      texto: "O lance inical de chute onde se inicia a partida ou onde troca devolução de posse de bola após uma pontuação"
    },
    {
      id: "ep",
      titulo: "Extra Point",
      imagem: "",
      texto: "Uma jogada bonus que o time que pontuou recebe, podendo optar pelo chute para +1 ou uma jogada normal para +2 pontos"

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
