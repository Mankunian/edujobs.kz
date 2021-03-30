import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
// Prime-ng
import { InputTextModule } from 'primeng/inputtext';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { CardModule } from 'primeng/card';
import { BannerComponent } from './components/landing/banner/banner.component';
import { SponsoredJobsComponent } from './components/landing/sponsored-jobs/sponsored-jobs.component';
import { FeaturedJobsComponent } from './components/landing/featured-jobs/featured-jobs.component';
import { CareerAdviceComponent } from './components/landing/career-advice/career-advice.component';
import { LocationGuidesComponent } from './components/landing/location-guides/location-guides.component';
import { SliderSectionComponent } from './components/landing/slider-section/slider-section.component';
import { ServiceSectionComponent } from './components/landing/service-section/service-section.component';
import { PostVacancyComponent } from './components/landing/post-vacancy/post-vacancy.component';
import { CarouselModule } from 'primeng/carousel';
import { RecommendedJobsComponent } from './components/landing/banner/recommended-jobs/recommended-jobs.component';
import { JobService } from './components/landing/banner/recommended-jobs/jobs.service';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { RecruitComponent } from './components/recruit/recruit.component';


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
		RecruitComponent
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
		GalleriaModule
	],
	providers: [JobService],
	bootstrap: [AppComponent]
})
export class AppModule { }
