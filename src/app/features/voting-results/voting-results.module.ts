import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingResultsRoutingModule } from './voting-results-routing.module';
import { PublicResultsComponent } from './public-results/public-results.component';
import { HeaderVotingResultsModule } from 'src/app/core/header-voting-results/header-voting-results.module';
import { SidebarVotingResultsModule } from 'src/app/core/sidebar-voting-results/sidebar-voting-results.module';


@NgModule({
  declarations: [
    PublicResultsComponent
  ],
  imports: [
    CommonModule,
    VotingResultsRoutingModule,
    HeaderVotingResultsModule,
    SidebarVotingResultsModule
  ], 
  exports: [
    PublicResultsComponent
  ]
})
export class VotingResultsModule { }
