import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaticaDetalhePage } from './tatica-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TaticaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaticaDetalhePageRoutingModule {}
