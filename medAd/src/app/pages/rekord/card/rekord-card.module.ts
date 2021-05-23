import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekordCardComponent } from './rekord-card.component';



@NgModule({
  declarations: [RekordCardComponent],
  imports: [
    CommonModule
  ],
  exports: [RekordCardComponent]
})
export class RekordCardModule { }
