import {InjectionToken} from '@angular/core';
import { environment } from 'src/environments/environment';

export let APP_CONFIG= new InjectionToken('app.config');

export interface CarsaleAppConfig{
    loginEndPoint:string
}

export const AppConfig : CarsaleAppConfig= {
    loginEndPoint:environment.login_url
}