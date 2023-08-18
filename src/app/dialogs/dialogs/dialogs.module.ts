import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';





@NgModule({
  declarations: [
    DeleteDialogComponent,
    LogoutDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports:[
    DeleteDialogComponent
  ]
})
export class DialogsModule { }
