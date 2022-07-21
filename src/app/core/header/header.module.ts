import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports:[
    NavBarComponent
  ],
  bootstrap:[NavBarComponent]
})
export class HeaderModule { }
