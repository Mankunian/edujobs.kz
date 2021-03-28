import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
// Prime-ng
import { InputTextModule } from 'primeng/inputtext';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';



@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		MainComponent
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
		AccordionModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
