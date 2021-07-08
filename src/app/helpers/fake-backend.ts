import { APP_CONFIG } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendURLInterceptor implements HttpInterceptor {

    constructor(@Inject(APP_CONFIG) private config) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // var token=localStorage.getItem('accessToken');
    // var aKey= localStorage.getItem('authKey');
    // var encryptedaKey=atob(aKey);

    //    let ipAddress = '192.168.0.1';


        // if(localStorage.getItem('ipAddress'))
        //    ipAddress = localStorage.getItem('ipAddress');
        //    var timezone:any;
         
        // if(aKey){
        // req = req.clone({
        //     url : this.getRequestUrl(req),
        //     body: req.body,
        //     headers:  new HttpHeaders({'Authorization': 'Bearer '+token, 'ip-address': ipAddress,'timezone':timezone,'authKey': encryptedaKey})
        // });
        // } else {
            req = req.clone({
                url : this.getRequestUrl(req),
                body: req.body,
                // headers:  new HttpHeaders({'Authorization': 'Bearer '+token,})
            });
        // }
        return next.handle(req);
    }

    setLocalStorage(req){
        if (!localStorage.getItem('userName'))
            localStorage.setItem('userName', req.body['username']);
    }

    getRequestUrl(req){
        let url = "";
        if(req.url.indexOf('authentication') > -1)
            url = this.config.loginEndPoint + req.url;
        // else if(req.url.indexOf('authorizationservice') > -1)
        //     url = this.config.loginEndPoint + req.url;
        // else if(req.url.indexOf('api') > -1)
        //     url = this.config.loginEndPoint + req.url;
        return url;
    }
}

export let BackendURLProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendURLInterceptor,
    multi: true
};