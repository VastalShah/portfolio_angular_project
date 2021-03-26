import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  userForm!: FormGroup;
  formControls: any;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(5)],
      confirmPassword: ['', Validators.required, Validators.minLength(5)]
    })
    this.formControls = this.userForm.controls;
  }

}
