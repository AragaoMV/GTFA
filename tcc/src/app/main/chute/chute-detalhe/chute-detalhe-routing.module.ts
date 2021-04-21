import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuteDetalhePage } from './chute-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ChuteDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuteDetalhePageRoutingModule {}
