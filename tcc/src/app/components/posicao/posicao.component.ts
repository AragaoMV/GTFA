import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-posicao',
  templateUrl: './posicao.component.html',
  styleUrls: ['./posicao.component.scss'],
})
export class PosicaoComponent implements OnInit {

 @Input()posicao: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

}
