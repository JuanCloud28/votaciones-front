import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateResultsComponent } from './candidate-results/candidate-results.component';
import { PartyResultsComponent } from './party-results/party-results.component';
import { PollingStationResultsComponent } from './polling-station-results/polling-station-results.component';
import { PublicResultsComponent } from './public-results/public-results.component';

const routes: Routes = [
  {
    path: "", component: PublicResultsComponent,
    children: [
      {
        path: "partido",
        component: PartyResultsComponent
      },
      {
        path: "candidato",
        component: CandidateResultsComponent
      },
      {
        path: "mesa",
        component: PollingStationResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingResultsRoutingModule { }
