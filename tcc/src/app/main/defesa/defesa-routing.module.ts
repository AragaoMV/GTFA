import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefesaPage } from './defesa.page';

const routes: Routes = [
  {
    path: '',
    component: DefesaPage
  },
  {
    path: ':defTaticaId',
    loadChildren: () => import('./defesa-detalhe/defesa-detalhe.module').then( m => m.DefesaDetalhePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefesaPageRoutingModule {}
