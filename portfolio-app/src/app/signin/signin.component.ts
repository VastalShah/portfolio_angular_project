import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userForm!: FormGroup;
  formControls!: any;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
    this.formControls = this.userForm.controls;
  }

}
