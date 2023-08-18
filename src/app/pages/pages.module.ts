import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ChildComponentComponent } from './dashboard/child-component/child-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogsModule } from '../dialogs/dialogs/dialogs.module';




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
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    DialogsModule
  ],
  exports:[
    DashboardComponent, 
    UserListComponent, 
    PagesComponent,
    MatIconModule
  ]
})
export class PagesModule {}
