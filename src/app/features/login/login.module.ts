import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPopupComponent } from './signin-popup/signin-popup.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SigninPopupComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    SigninPopupComponent
  ]
})
export class LoginModule { }
