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



@NgModule({
  declarations: [PagesComponent, DashboardComponent, UserListComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule, MatTableModule, MatPaginatorModule, AuthModule],
  exports:[DashboardComponent, UserListComponent]
})
export class PagesModule {}
