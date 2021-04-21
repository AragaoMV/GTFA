import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtaqueService } from '../ataque.service';
import { Tatica } from '../tatica.model';

@Component({
  selector: 'app-tatica-detalhe',
  templateUrl: './tatica-detalhe.page.html',
  styleUrls: ['./tatica-detalhe.page.scss'],
})
export class TaticaDetalhePage implements OnInit {

  loadedTatica: Tatica;

  constructor(private activatedRoute: ActivatedRoute, private ataqueService: AtaqueService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('taticaId')){
        //redirect
        return;
      }
      const taticaId = paramMap.get('taticaId');
      this.loadedTatica = this.ataqueService.getTatica(taticaId);
     });
  }

}
