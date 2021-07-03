import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { logindata, regdata } from '../JsonData/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  
  login: boolean = true;
  error: any;

  signindata: any;
  signupdata: any;

  move() {
    this.login = !this.login;
  }

  submit() {

  }

  formlogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  formreg = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('farmer'),
    confirmpassword: new FormControl(''),
  })
  
  ngOnInit(): void {
    this.signindata = logindata;
    this.signupdata = regdata;
  }

}
