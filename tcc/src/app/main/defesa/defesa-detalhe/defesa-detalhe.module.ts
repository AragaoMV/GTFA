import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefesaDetalhePageRoutingModule } from './defesa-detalhe-routing.module';

import { DefesaDetalhePage } from './defesa-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefesaDetalhePageRoutingModule
  ],
  declarations: [DefesaDetalhePage]
})
export class DefesaDetalhePageModule {}
