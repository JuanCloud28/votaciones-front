import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarElementComponent } from './sidebar-element/sidebar-element.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    SidebarElementComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    SidebarElementComponent
  ]
})
export class SidebarVotingResultsModule { }
