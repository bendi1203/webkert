import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekordCardComponent } from './rekord-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RekordCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [RekordCardComponent]
})
export class RekordCardModule { }
