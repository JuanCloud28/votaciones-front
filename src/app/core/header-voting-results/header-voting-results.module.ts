import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavVotingResultsComponent } from './nav-voting-results/nav-voting-results.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from 'src/app/features/login/login.module';



@NgModule({
  declarations: [
    NavVotingResultsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    LoginModule
  ],
  exports: [
    NavVotingResultsComponent
  ]
})
export class HeaderVotingResultsModule { }
