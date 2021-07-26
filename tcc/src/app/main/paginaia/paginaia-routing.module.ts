import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaiaPage } from './paginaia.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaiaPageRoutingModule {}
