import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { REKORDS } from './../../shared/database/rekord.database';
import { MatDialog } from '@angular/material/dialog';
import { RekordAddComponent } from '../rekord/add/rekord-add/rekord-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  categories = CATEGORIES;
  rekords = REKORDS;
  category?= '';
  page = 'homer';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.category = 'details';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event:string): void{
      this.category = event;
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(RekordAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.rekords.push(result);
      }
    });
  }
}
