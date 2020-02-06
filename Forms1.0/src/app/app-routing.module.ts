import {NgModule} from '@angular/core';
import {Routes, RouterModule, RouterOutlet} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })

    export class AppRoutingModule{}