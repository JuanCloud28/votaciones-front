import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from 'src/app/core/header/header.module';
import { FooterModule } from 'src/app/core/footer/footer.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HomePageComponent
  ],
  bootstrap: [HomePageComponent]
})
export class HomeModule { }
