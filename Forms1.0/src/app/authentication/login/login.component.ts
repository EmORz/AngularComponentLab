import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel;
  loginFailed: boolean;
  errMessage: string;
  constructor(private authService: AuthService, private router: Router) {
    this.model = new LoginModel('', '');
   }

  ngOnInit() {
  }
  login(){

    this.authService.login(this.model)
    .subscribe(data => {

      this.successfulLogin(data)
    }, 
    err =>{

      this.loginFailed = true;

    });    
  }

  successfulLogin(data){
    this.authService.authtoken=data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.router.navigateByUrl('/home');

  }

}
