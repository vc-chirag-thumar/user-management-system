import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { UserListComponent } from './user-list/user-list.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
        canActivate: [authGuard]
      },
      {
        path:'user-list',
        component:UserListComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
