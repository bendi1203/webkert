import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekordCardComponent } from './rekord-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RekordCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [RekordCardComponent]
})
export class RekordCardModule { }
