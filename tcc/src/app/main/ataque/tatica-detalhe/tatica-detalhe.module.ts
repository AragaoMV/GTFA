import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaticaDetalhePageRoutingModule } from './tatica-detalhe-routing.module';

import { TaticaDetalhePage } from './tatica-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaticaDetalhePageRoutingModule
  ],
  declarations: [TaticaDetalhePage]
})
export class TaticaDetalhePageModule {}
