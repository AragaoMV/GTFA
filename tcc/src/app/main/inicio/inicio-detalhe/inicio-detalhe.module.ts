import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioDetalhePageRoutingModule } from './inicio-detalhe-routing.module';

import { InicioDetalhePage } from './inicio-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioDetalhePageRoutingModule
  ],
  declarations: [InicioDetalhePage]
})
export class InicioDetalhePageModule {}
