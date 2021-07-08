import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  errMsg:string=''
  constructor(private rest: AuthService,
    private router:Router) { }

  ngOnInit(): void {

  }

  userLogin(){
    this.errMsg=''
    this.rest.login(this.username,this.password).subscribe(res=>{
      this.router.navigate(['/home']);
      localStorage.setItem('accesstoken',res.token);
    },err=>{
      this.errMsg="Please check email/password";
    })
  }

}
