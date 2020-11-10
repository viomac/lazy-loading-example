import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'battle',
        loadChildren: () => import('./modules/battle/battle.module').then(m => m.BattleModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
