import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { REKORDS } from './../../shared/database/rekord.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  categories = CATEGORIES;
  rekords = REKORDS;
  category?= '';
  page = 'home';

  constructor() { }

  ngOnInit(): void {
    this.category = 'rekord';
  }

  ngOnDestroy(): void {
    delete this.category;
  }
}
