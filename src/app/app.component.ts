import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showHeader = true;
  constructor(private _router:Router, private authService:AuthService) {
    
      // if (this.authService.af.auth.currentUser == null) {
      //   console.log("Logged out");
      //   this._router.navigate(['login']);
      // } else {
      //   this._router.navigate(['home']);
      // }
  }
  
  ngOnInit() {
    let currentUrl = this._router.url; 
  }

  onActivate(event){
    if(event.isLogin == true){
      this.showHeader = false;
  
    }else{
      this.showHeader = true;
    }
  }
  
  logout(){
    this.authService.logout().then(
      (data)=>{
        this._router.navigate(['login'])
      }
    );
  }

}
