import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule
  ],
  exports: [NavComponent],
})
export class NavModule { }