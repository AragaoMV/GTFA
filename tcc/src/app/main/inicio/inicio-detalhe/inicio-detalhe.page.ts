import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalheGeral } from '../inicio.model';
import { InicioService } from '../inicio.service';

@Component({
  selector: 'app-inicio-detalhe',
  templateUrl: './inicio-detalhe.page.html',
  styleUrls: ['./inicio-detalhe.page.scss'],
})
export class InicioDetalhePage implements OnInit {
  loadedDetalheGeral: DetalheGeral;

  constructor(private activatedRoute: ActivatedRoute, private inicioService: InicioService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('detalheGeralId')) {
        return;
      }
      const detalheGeralId = paramMap.get('detalheGeralId');
      this.loadedDetalheGeral = this.inicioService.getDetalheGeral(detalheGeralId);
    });
  }

}
