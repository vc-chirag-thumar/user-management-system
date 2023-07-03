import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutsModule } from '../routes/auth-routs/auth-routs.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, NgIf,
    FormsModule, ReactiveFormsModule,AuthRoutsModule, HttpClientModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
