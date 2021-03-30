import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		MainComponent,
		LoginRegisterComponent
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
		CardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
