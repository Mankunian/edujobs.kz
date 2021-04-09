import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Prime-ng
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';

// Services
import { JobService } from './components/landing/banner/recommended-jobs/jobs.service';

// Components
// import { AppComponent, FormatTimePipe } from './app.component';
import { AppComponent } from './app.component';

import { BannerComponent } from './components/landing/banner/banner.component';
import { SponsoredJobsComponent } from './components/landing/sponsored-jobs/sponsored-jobs.component';
import { FeaturedJobsComponent } from './components/landing/featured-jobs/featured-jobs.component';
import { CareerAdviceComponent } from './components/landing/career-advice/career-advice.component';
import { LocationGuidesComponent } from './components/landing/location-guides/location-guides.component';
import { SliderSectionComponent } from './components/landing/slider-section/slider-section.component';
import { ServiceSectionComponent } from './components/landing/service-section/service-section.component';
import { PostVacancyComponent } from './components/landing/post-vacancy/post-vacancy.component';
import { RecommendedJobsComponent } from './components/landing/banner/recommended-jobs/recommended-jobs.component';
import { RecruitComponent } from './components/recruit/recruit.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { FilterComponent } from './components/main/filter/filter.component';
import { VacancyListComponent } from './components/main/vacancy-list/vacancy-list.component';
import { PayPerVacancyComponent } from './components/recruit/pay-per-vacancy/pay-per-vacancy.component';
import { JobComponent } from './components/landing/sponsored-jobs/job/job.component';
import { CompanyInfoComponent } from "./components/landing/featured-jobs/company-info/company-info.component";

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ComingSoonComponent } from './components/landing/coming-soon/coming-soon.component';
import { JobseekersComponent } from './components/jobseekers/jobseekers.component';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		MainComponent,
		LoginRegisterComponent,
		BannerComponent,
		SponsoredJobsComponent,
		FeaturedJobsComponent,
		CareerAdviceComponent,
		LocationGuidesComponent,
		SliderSectionComponent,
		ServiceSectionComponent,
		PostVacancyComponent,
		RecommendedJobsComponent,
		RecruitComponent,
		FilterComponent,
		VacancyListComponent,
		PayPerVacancyComponent,
		JobComponent,
		CompanyInfoComponent,
		ComingSoonComponent,
		JobseekersComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		NgbModule,
		InputTextModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MenuModule,
		DividerModule,
		ButtonModule,
		AccordionModule,
		MessagesModule,
		MessageModule,
		BadgeModule,
		CardModule,
		CarouselModule,
		HttpClientModule,
		TagModule,
		GalleriaModule,
		ChipModule,
		DropdownModule,
		MultiSelectModule,
		DialogModule,
		TabViewModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		StepsModule
	],
	providers: [JobService],
	bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http);
}
