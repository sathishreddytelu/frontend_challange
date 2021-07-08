import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(userid,psw){
      let userId=userid;
        let data={
            "password": psw,
            "meta": "string"
          }
    return this.http.put<any>('/v1/authentication/'+userId, data).pipe(map(user=>{
      this.loggedIn.next(true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }))
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.clear();
    sessionStorage.clear();
  }

  get isLoggedIn(){
    return this.loggedIn;
  }
  
  setProperties(){
    this.isLoggedIn.next(true);
  }

}



    