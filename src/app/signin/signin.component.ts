import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email=""
  password=""

  constructor(public auth: AuthserviceService, public route: Router) { }

  ngOnInit(): void {
  }
  SignIn(){
    let status = false
    status = this.auth.signInAuth(this.email, this.password)
    if(status==true){
      this.route.navigateByUrl('/home')
    }
  }

}
