import { Component, OnDestroy, OnInit } from '@angular/core';
import { REKORDS } from './../../shared/database/rekord.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  rekords = REKORDS;
  category?= '';
  constructor() { }

  ngOnInit(): void {
    this.category = 'rekord';
  }

  ngOnDestroy(): void {
    delete this.category;
  }
}
