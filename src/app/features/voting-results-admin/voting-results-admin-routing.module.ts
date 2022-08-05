import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyResultsComponent } from '../voting-results/party-results/party-results.component';
import { AdminPartyComponent } from './admin-party/admin-party.component';
import { AdminPollingStationComponent } from './admin-polling-station/admin-polling-station.component';
import { AdminResultsComponent } from './admin-results/admin-results.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
  {
    path:"", component: AdminResultsComponent,
    children: [
      {
        path:"partido",
        component: AdminPartyComponent
      },
      {
        path:"mesas",
        component: AdminPollingStationComponent
      },
      {
        path:"usuarios",
        component: AdminUsersComponent
      }

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingResultsAdminRoutingModule { }
