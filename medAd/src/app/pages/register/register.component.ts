import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  })

  @Output() callSelectPage = new EventEmitter<string>();

error = false;

  constructor() { }

  registration():void {
    this.error = false;
    if(this.form.valid){
      console.log(this.form.value);
    }
    this.error = true;
  }

  ngOnInit(): void {
  }

}
