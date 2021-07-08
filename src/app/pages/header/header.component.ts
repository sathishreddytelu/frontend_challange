import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userId="salesman@random.com";
  
  constructor(private router:Router, private authservice : AuthService) { }

  ngOnInit(): void {}

  logout(){
    this.authservice.logout();
    this.router.navigate(['/login'])
  }

}
