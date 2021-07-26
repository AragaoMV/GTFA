import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosicaoComponent } from '../posicao/posicao.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PosicaoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[PosicaoComponent]
})
export class SharedComponentsModule { }
