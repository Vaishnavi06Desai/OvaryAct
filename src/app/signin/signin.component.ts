import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { logindata, regdata } from '../JsonData/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private af: AngularFireAuth, private router: Router) { }

  
  login: boolean = true;
  error: any;

  signindata: any;
  signupdata: any;

  move() {
    this.login = !this.login;
  }

  submit() {
    if(this.login){
      this.af.signInWithEmailAndPassword(this.formlogin.get("email").value, this.formlogin.get("password").value).then(res => {
        this.router.navigate(['/home']);
      })
    }
    else{
      this.af.createUserWithEmailAndPassword(this.formreg.get("email").value, this.formreg.get("password").value).then(res => {
        this.router.navigate(['/home']);
      })
    }
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
