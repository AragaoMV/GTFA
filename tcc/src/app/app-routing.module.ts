import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),
      },]
  },
  {
    path: 'ataque',
    loadChildren: () => import('./main/ataque/ataque.module').then( m => m.AtaquePageModule),
  },
  {
    path: 'defesa',
    loadChildren: () => import('./main/defesa/defesa.module').then( m => m.DefesaPageModule)
  },
  {
    path: 'chute',
    loadChildren: () => import('./main/chute/chute.module').then( m => m.ChutePageModule)
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
