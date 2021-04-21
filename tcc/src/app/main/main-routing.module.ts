import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [


  {
    path:'tabs',
    component: MainPage,
    children:[
      {
        path:'inicio',
        children:[
          {
            path:'',
            loadChildren:() => import('./inicio/inicio.module').then(m=>m.InicioPageModule)
          }
        ]
      },
      {
        path:'ataque',
        children:[
        {
          path:'',
          loadChildren: () => import('./ataque/ataque.module').then(m=>m.AtaquePageModule)
        }
      ]
     },
     {
      path:'defesa',
      children:[
        {
          path:'',
          loadChildren: () => import('./defesa/defesa.module').then(m=>m.DefesaPageModule)
        }
      ]
     },
     {
       path:'especiais',
       children:[
         {
           path:'',
           loadChildren:() =>import('./chute/chute.module').then(m=>m.ChutePageModule)
         }
       ]
     },
     {
      path:'',
      redirectTo:'/main/tabs/inicio',
      pathMatch:'full'
     }
    ]
  },
  {
    path:'',
    redirectTo:'/main/tabs/inicio',
    pathMatch:'full'
  },
  {
    path: 'posicao',
    loadChildren: () => import('./posicao/posicao.module').then( m => m.PosicaoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
