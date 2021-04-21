import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefesaPageRoutingModule } from './defesa-routing.module';

import { DefesaPage } from './defesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefesaPageRoutingModule
  ],
  declarations: [DefesaPage]
})
export class DefesaPageModule {}
