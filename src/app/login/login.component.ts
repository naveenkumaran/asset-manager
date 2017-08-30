import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  public user = {username:'' , password:''};
  public errorMsg = '';

  constructor(public auth:AuthService, public router:Router) { }
  
    ngOnInit() {
    }

  login() {
    this.auth.loginWithEmail(this.user.username, this.user.password).then((data) =>{
      this.router.navigate(['home']);
    });
  }

  OnInit(){

  }
}
