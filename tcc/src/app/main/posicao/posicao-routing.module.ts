import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosicaoPage } from './posicao.page';

const routes: Routes = [
  {
    path: '',
    component: PosicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosicaoPageRoutingModule {}
