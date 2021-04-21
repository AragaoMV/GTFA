import { QueryBindingType } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AtaqueService } from './ataque.service';
import { Tatica } from './tatica.model';

@Component({
  selector: 'app-ataque',
  templateUrl: './ataque.page.html',
  styleUrls: ['./ataque.page.scss'],
})
export class AtaquePage implements OnInit {
    taticas: Tatica[];

  constructor(private ataqueService: AtaqueService) { }

  ngOnInit() {
    this.taticas = this.ataqueService.getAllTaticas();

  }

}
