import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BattleComponent } from './battle/battle.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'battle',
        component: BattleComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
    ]
  },
  { path: '',   redirectTo: '/admin', pathMatch: 'full' }, 
  {
    path: '**', redirectTo: 'battle'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
