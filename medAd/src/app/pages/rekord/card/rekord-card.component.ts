import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rekord } from './../../../shared/models/rekord.model';

@Component({
  selector: 'app-rekord-card',
  templateUrl: './rekord-card.component.html',
  styleUrls: ['./rekord-card.component.scss']
})
export class RekordCardComponent implements OnInit {
  @Input() rekord?: Rekord;
  @Output() callFavorite = new EventEmitter<Rekord | null>();
  @Output() getRekord = new EventEmitter<Rekord>();

  constructor() { }

  ngOnInit(): void {
  }

}
