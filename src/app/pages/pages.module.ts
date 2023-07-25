import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthModule } from '../auth/auth.module';
import { ChildComponentComponent } from './dashboard/child-component/child-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    UserListComponent, 
    ChildComponentComponent
  ],
  imports: [
    CommonModule, 
    PagesRoutingModule, 
    LayoutModule, 
    MatTableModule, 
    MatPaginatorModule, 
    AuthModule, 
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatCardModule
  ],
  exports:[
    DashboardComponent, 
    UserListComponent, 
    PagesComponent
  ]
})
export class PagesModule {}
