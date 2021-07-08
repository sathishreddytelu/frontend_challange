import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take , map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService, private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> 
    {
    console.log('test');
    
      return this.authservice.isLoggedIn
      .pipe(
        take(1),map((isLoggedIn: boolean)=>{
          const currentUser=JSON.parse(localStorage.getItem('currentUser'));
          if(!currentUser){
            this.router.navigate(['/']);
            return false;
          }else{
            this.authservice.setProperties();
          }
          return true;
        })
       
      )
  }
  
}
