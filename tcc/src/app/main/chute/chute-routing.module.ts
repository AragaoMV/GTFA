import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChutePage } from './chute.page';

const routes: Routes = [
  {
    path: '',
    component: ChutePage
  },
  {
    path: ':espTaticaId',
    loadChildren: () => import('./chute-detalhe/chute-detalhe.module').then( m => m.ChuteDetalhePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChutePageRoutingModule {}
