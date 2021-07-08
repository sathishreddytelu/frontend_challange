import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [HomeComponent,PagesComponent, HeaderComponent, DetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
