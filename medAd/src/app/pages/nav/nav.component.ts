import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/category.model';
import { Rekord } from 'src/app/shared/models/rekord.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sCategoryTitle?: string;
  @Input() selectedCategory?: string;
  @Input() categories: Category[] = [];
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();

  myControl = new FormControl();
  options: string[] = ['Egy', 'Ketto', 'Harom'];
  filteredOptions: Observable<string[]> | null = null;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this.filter(value))
      );
  }

  select(target: string): void {
    this.callSelectC.emit(target);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }
}
