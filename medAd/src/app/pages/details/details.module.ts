import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,MatTableModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
