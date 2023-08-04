import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule, RouterModule, MatIconModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
