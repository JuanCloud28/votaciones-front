import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicResultsComponent } from './public-results/public-results.component';

const routes: Routes = [
  {
    path: "", component: PublicResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingResultsRoutingModule { }
