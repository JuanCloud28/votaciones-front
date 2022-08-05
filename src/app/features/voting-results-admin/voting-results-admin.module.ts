import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotingResultsAdminRoutingModule } from './voting-results-admin-routing.module';
import { AdminResultsComponent } from './admin-results/admin-results.component';
import { SidebarVotingResultsModule } from 'src/app/core/sidebar-voting-results/sidebar-voting-results.module';
import { HeaderVotingResultsModule } from 'src/app/core/header-voting-results/header-voting-results.module';
import { AdminPartyComponent } from './admin-party/admin-party.component';
import { AdminPollingStationComponent } from './admin-polling-station/admin-polling-station.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


@NgModule({
  declarations: [
    AdminResultsComponent,
    AdminPartyComponent,
    AdminPollingStationComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    VotingResultsAdminRoutingModule,
    HeaderVotingResultsModule,
    SidebarVotingResultsModule
  ]
})
export class VotingResultsAdminModule { }
