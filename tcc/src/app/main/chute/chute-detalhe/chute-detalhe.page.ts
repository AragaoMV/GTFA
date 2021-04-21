import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChuteService } from '../chute.service';
import { EspTatica } from '../esptatica.model';

@Component({
  selector: 'app-chute-detalhe',
  templateUrl: './chute-detalhe.page.html',
  styleUrls: ['./chute-detalhe.page.scss'],
})
export class ChuteDetalhePage implements OnInit {

  loadedEspTatica: EspTatica;

  constructor(private activatedRoute: ActivatedRoute, private chuteService: ChuteService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('espTaticaId')){
        //redirect
        return;
      }
      const esptaticaId = paramMap.get('espTaticaId');
      this.loadedEspTatica = this.chuteService.getEspTatica(esptaticaId);
     });
  }

}
