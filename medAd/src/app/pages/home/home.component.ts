import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { REKORDS } from './../../shared/database/rekord.database';
import { MatDialog } from '@angular/material/dialog';
import { RekordAddComponent } from '../rekord/add/rekord-add/rekord-add.component';
import { Rekord } from 'src/app/shared/models/rekord.model';

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
  detailData: any;

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

  goToDetails(event: Rekord): void {
    this.detailData = event;
    this.page = 'details';
  }

   openDialog(): void {
    const dialogRef = this.dialog.open(RekordAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.rekords.push(result);
      }
    });
  }
}
