import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElsoCardComponent } from './elso-card.component';



@NgModule({
  declarations: [ElsoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ElsoCardComponent]
})
export class ElsoCardModule { }
