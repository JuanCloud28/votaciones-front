import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminResultsComponent } from './admin-results/admin-results.component';

const routes: Routes = [
  {path:"", component: AdminResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingResultsAdminRoutingModule { }
