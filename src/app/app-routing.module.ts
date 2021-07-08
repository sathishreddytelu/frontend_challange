import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:"home",
// loadChildren: 'src/app/pages/pages.module#PagesModule',
// loadChildren: () => import('src/app/pages/pages.module')
loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule), canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
