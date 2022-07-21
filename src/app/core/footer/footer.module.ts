import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterElementComponent } from './footer-element/footer-element.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FooterElementComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MatIconModule
  ],
  exports: [
    FooterElementComponent
  ],
  bootstrap: [
    FooterElementComponent
  ]
})
export class FooterModule { }
