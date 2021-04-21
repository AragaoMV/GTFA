import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtaquePage } from './ataque.page';

const routes: Routes = [
  {
    path: '',
    component: AtaquePage
  },
  {
    path: ':taticaId',
    loadChildren: () => import('./tatica-detalhe/tatica-detalhe.module').then( m => m.TaticaDetalhePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtaquePageRoutingModule {}
