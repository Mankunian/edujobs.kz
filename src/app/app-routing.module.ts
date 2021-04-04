import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';
import { ComingSoonComponent } from './components/landing/coming-soon/coming-soon.component';
import { CompanyInfoComponent } from './components/landing/featured-jobs/company-info/company-info.component';
import { LandingComponent } from './components/landing/landing.component';
import { JobComponent } from './components/landing/sponsored-jobs/job/job.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { MainComponent } from './components/main/main.component';
import { PayPerVacancyComponent } from './components/recruit/pay-per-vacancy/pay-per-vacancy.component';
import { RecruitComponent } from './components/recruit/recruit.component';

const routes: Routes = [
	// { path: '', component: LandingComponent, pathMatch: 'full' },
	{ path: '', component: LandingComponent, pathMatch: 'full' },
	{ path: 'landing', component: LandingComponent },
	{ path: 'main', component: MainComponent },
	{ path: 'login', component: LoginRegisterComponent },
	{ path: 'recruit', component: RecruitComponent },
	{ path: 'recruit/pay-per-vacancy', component: PayPerVacancyComponent },
	{ path: 'job/:id', component: JobComponent, },
	{ path: 'company/:id', component: CompanyInfoComponent, },
	{ path: 'jobseekers', component: JobseekersComponent, },
	{ path: '**', component: LandingComponent }
];
// configures NgModule imports and exports
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }