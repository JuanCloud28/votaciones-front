import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingResultsRoutingModule } from './voting-results-routing.module';
import { PublicResultsComponent } from './public-results/public-results.component';
import { HeaderVotingResultsModule } from 'src/app/core/header-voting-results/header-voting-results.module';
import { SidebarVotingResultsModule } from 'src/app/core/sidebar-voting-results/sidebar-voting-results.module';
import { PartyResultsComponent } from './party-results/party-results.component';
import { CandidateResultsComponent } from './candidate-results/candidate-results.component';
import { PollingStationResultsComponent } from './polling-station-results/polling-station-results.component';


@NgModule({
  declarations: [
    PublicResultsComponent,
    PartyResultsComponent,
    CandidateResultsComponent,
    PollingStationResultsComponent
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
