import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquePageRoutingModule } from './ataque-routing.module';

import { AtaquePage } from './ataque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtaquePageRoutingModule
  ],
  declarations: [AtaquePage]
})
export class AtaquePageModule {}
