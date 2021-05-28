import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rekord } from './../../../shared/models/rekord.model';

@Component({
  selector: 'app-rekord-card',
  templateUrl: './rekord-card.component.html',
  styleUrls: ['./rekord-card.component.scss']
})
export class RekordCardComponent implements OnInit {

  @Input() rekord?: Rekord;
 
  @Output() callDetails = new EventEmitter<Rekord | null>();
  @Output() getRekord = new EventEmitter<Rekord>();

  constructor() { }

  ngOnInit(): void {
  }
  
information(event: any):void{
  event.stopPropagation();
  this.callDetails.emit(this.rekord);
}
/*
goToEdit(event: Rekord): void {
  this.detailData = event;
  this.page = 'edit';
}
*/
}
