import { Component, OnInit } from '@angular/core';
import { DetalheGeral } from './inicio.model';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  detalheGeral: DetalheGeral[];
  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.detalheGeral= this.inicioService.getAllDetalheGeral();
  }

}
