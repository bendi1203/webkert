import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rekord-add',
  templateUrl: './rekord-add.component.html',
  styleUrls: ['./rekord-add.component.scss']
})
export class RekordAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    identifier: new FormControl(''),
    instantiates: new FormControl(''),
    partOf: new FormControl(''),
    status: new FormControl('', Validators.required),
    statusReason: new FormControl(''),
    category: new FormControl(''),
    medication: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    context: new FormControl(''),
    supportInformation: new FormControl(''),
    effective: new FormControl('', Validators.required),
    performer: new FormControl('', Validators.required),
    reasonCode: new FormControl(''),
    reasonReference: new FormControl(''),
    request: new FormControl('', Validators.required),
    device: new FormControl(''),
    note: new FormControl(''),
    dosage: new FormControl('', Validators.required),
    eventHistory: new FormControl('', Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<RekordAddComponent>) { }

  ngOnInit(): void {
  }

}
