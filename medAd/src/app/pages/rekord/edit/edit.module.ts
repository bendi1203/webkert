import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RekordCardModule } from '../card/rekord-card.module';



@NgModule({
  declarations: [
    EditComponent, RekordCardModule
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditComponent
  ]
})
export class EditModule { }
