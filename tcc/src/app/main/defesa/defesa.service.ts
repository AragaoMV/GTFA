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
      imagem: "",
      texto: "Cobertura é um timpo de tatica defensiva onde o jogador defensor defende apenas uma regiao, ou zona do campo"
    },
    {
      id: "m2m",
      titulo: "Homem-contra-Homem",
      imagem:"",
      texto: "Defesa Homem contra homem é quando o defesor é responsavel pela marcação de apenas um jogador."
    }
  ]

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
