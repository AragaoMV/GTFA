import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosicaoPageRoutingModule } from './posicao-routing.module';

import { PosicaoPage } from './posicao.page';
import { SharedComponentsModule } from 'src/app/components/shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosicaoPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [PosicaoPage]
})
export class PosicaoPageModule {}
