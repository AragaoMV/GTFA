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
      imagem:'imagemapp\Routetree.PNG',
      texto:'A árvore de rotas são as rotas feita pelos WRs de acordo com o playbook.'
    },
    {
      id:'rpo',
      titulo: 'Run-Pass Option',
      imagem:'',
      texto:'O RPO ou Run-Pass Option, é um estilo de jogado onde ela pode ser tanto corrida, tanto passe, de acordo com o que o QB achar melhor baseado na leitura de jogo'
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
