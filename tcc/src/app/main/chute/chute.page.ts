import { Component, OnInit } from '@angular/core';
import { ChuteService } from './chute.service';
import { EspTatica } from './esptatica.model';

@Component({
  selector: 'app-chute',
  templateUrl: './chute.page.html',
  styleUrls: ['./chute.page.scss'],
})
export class ChutePage implements OnInit {

  espTaticas: EspTatica[];

  constructor(private chuteService: ChuteService) { }

  ngOnInit() {
    this.espTaticas = this.chuteService.getAllEspTaticas();
  }

}
