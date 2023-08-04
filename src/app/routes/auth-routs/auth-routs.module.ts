import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

export const routes: Routes = [
  {
    path:'', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  // {
  //   path:'**', component: LoginComponent
  // },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutsModule { }
