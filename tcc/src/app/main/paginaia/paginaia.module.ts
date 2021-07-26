import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaiaPageRoutingModule } from './paginaia-routing.module';

import { PaginaiaPage } from './paginaia.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    PaginaiaPageRoutingModule
  ],
  declarations: [PaginaiaPage]
})
export class PaginaiaPageModule {}
