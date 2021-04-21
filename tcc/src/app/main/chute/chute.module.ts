import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChutePageRoutingModule } from './chute-routing.module';

import { ChutePage } from './chute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChutePageRoutingModule
  ],
  declarations: [ChutePage]
})
export class ChutePageModule {}
