import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RekordAddComponent } from './rekord-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    RekordAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ScrollingModule
  ],
  exports: [RekordAddComponent]
})
export class RekordAddModule { }
