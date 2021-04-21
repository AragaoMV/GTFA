import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuteDetalhePageRoutingModule } from './chute-detalhe-routing.module';

import { ChuteDetalhePage } from './chute-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuteDetalhePageRoutingModule
  ],
  declarations: [ChuteDetalhePage]
})
export class ChuteDetalhePageModule {}
