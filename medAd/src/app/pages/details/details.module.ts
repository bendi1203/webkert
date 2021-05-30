import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RekordCardModule } from '../rekord/card/rekord-card.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule, RekordCardModule, MatIconModule, RouterModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
