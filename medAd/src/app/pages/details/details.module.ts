import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RekordCardModule } from '../rekord/card/rekord-card.module';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule, RekordCardModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
