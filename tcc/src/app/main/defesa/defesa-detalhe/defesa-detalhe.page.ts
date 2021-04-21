import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DefTatica } from '../defesa.model';
import { DefesaService } from '../defesa.service';

@Component({
  selector: 'app-defesa-detalhe',
  templateUrl: './defesa-detalhe.page.html',
  styleUrls: ['./defesa-detalhe.page.scss'],
})
export class DefesaDetalhePage implements OnInit {

  loadedDefTatica: DefTatica;

  constructor(private activatedRoute: ActivatedRoute, private defesaService: DefesaService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('defTaticaId')){
        //redirect
        return;
      }
      const deftaticaId = paramMap.get('defTaticaId');
      this.loadedDefTatica = this.defesaService.getDefTatica(deftaticaId);
    });
  }

}
