import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)},
  {path: "results", loadChildren: ()=> import('./features/voting-results/voting-results.module').then(m => m.VotingResultsModule)},
  {path: "admin", loadChildren: ()=> import('./features/voting-results-admin/voting-results-admin.module').then(m => m.VotingResultsAdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
