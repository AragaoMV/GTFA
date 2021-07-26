import { Component, OnInit } from '@angular/core';
import {DefTatica} from './defesa.model';
import { DefesaService } from './defesa.service';

@Component({
  selector: 'app-defesa',
  templateUrl: './defesa.page.html',
  styleUrls: ['./defesa.page.scss'],
})
export class DefesaPage implements OnInit {

  defTaticas: DefTatica[];

  constructor(private defesaService: DefesaService) { }

  ngOnInit() {
    this.defTaticas = this.defesaService.getAllDefTaticas();
  }

}
