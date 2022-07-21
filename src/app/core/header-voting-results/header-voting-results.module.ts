import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavVotingResultsComponent } from './nav-voting-results/nav-voting-results.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NavVotingResultsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    NavVotingResultsComponent
  ]
})
export class HeaderVotingResultsModule { }
