import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefesaDetalhePage } from './defesa-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DefesaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefesaDetalhePageRoutingModule {}
