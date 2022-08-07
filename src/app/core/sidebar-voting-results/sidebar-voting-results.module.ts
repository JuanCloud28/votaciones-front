import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarElementComponent } from './sidebar-element/sidebar-element.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SidebarElementComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    SidebarElementComponent
  ]
})
export class SidebarVotingResultsModule { }
