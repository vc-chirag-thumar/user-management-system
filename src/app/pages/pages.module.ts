import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, UserListComponent],
  imports: [CommonModule, PagesRoutingModule, LayoutModule],
  exports:[DashboardComponent, UserListComponent]
})
export class PagesModule {}
