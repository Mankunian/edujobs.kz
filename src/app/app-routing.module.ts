import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LandingComponent } from './components/landing/landing.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'landing', component: LandingComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'login', component: LoginRegisterComponent },
	{ path: '**', component: LandingComponent }
];
// configures NgModule imports and exports
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }