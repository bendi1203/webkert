import { Component, Input, OnInit } from '@angular/core';
import { Rekord } from './../../../shared/models/rekord.model';

@Component({
  selector: 'app-rekord-card',
  templateUrl: './rekord-card.component.html',
  styleUrls: ['./rekord-card.component.scss']
})
export class RekordCardComponent implements OnInit {
  @Input() rekord?: Rekord;

  constructor() { }

  ngOnInit(): void {
  }

}
