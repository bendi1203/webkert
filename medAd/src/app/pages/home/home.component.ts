import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { REKORDS } from './../../shared/database/rekord.database';
import { MatDialog } from '@angular/material/dialog';
import { RekordAddComponent } from '../rekord/add/rekord-add/rekord-add.component';
import { Rekord } from 'src/app/shared/models/rekord.model';
import { FbBaseService } from './../../services/fb-base.service';

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

  constructor(private dialog: MatDialog, private service: FbBaseService) { }

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
    dialogRef.afterClosed().subscribe((rekord: Rekord) => {
      console.log(rekord);
      if (rekord) {
        this.rekords.push(rekord);
        this.service.add('rekords', rekord)
      }
    }, err => {
      console.warn(err);
    });
  }
}
