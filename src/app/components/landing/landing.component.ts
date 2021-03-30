import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from "../../services/share-data.service";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
	region: any;
	job_title: any;
	sponsoredJobs: any;
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
	featuredSchools: { id: number; title: string; img: string; }[];
	carrerAdvice: { id: number; title: string; description: string; img: string; }[];
	howCanWeHelp: any[];
	locations: { id: number; name: string; img: string; }[];


	constructor(private router: Router, private shareData: ShareDataService, config: NgbCarouselConfig) {
		config.interval = 3000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
		config.wrap = false;
	}

	ngOnInit(): void {
		this.getSponsoredJobs();
		this.getFeaturedJobs();
		this.getCarrerAdvice();
		this.getHowCanWeHelp();
		this.getLocations();
	}

	searchJobs() {
		let search_params = { 'region': this.region, 'job_title': this.job_title };
		this.shareData.changeMessage(JSON.stringify(search_params))
		this.router.navigate(['/main'])
	}

	getSponsoredJobs() {
		this.sponsoredJobs = [
			{ id: 1, title: 'Principal', location: 'Greater London', school: 'The Hyde school', price: 'MPS', time: 'Permanent' },
			{ id: 2, title: 'Key stage 2 class Teacher', location: 'Manchester', school: 'The Hyde school', price: 'MPS', time: 'Permanent' },
			{ id: 3, title: 'Lecturer in Digital Computer', location: 'Greater London', school: 'The Hyde school', price: 'MPS', time: 'Permanent' }
		]
	}

	getFeaturedJobs() {
		this.featuredSchools = [
			{ id: 1, title: 'The Pivot Academy', img: 'assets/img/custom/1.jpg' },
			{ id: 2, title: 'The Hyde School', img: 'assets/img/custom/2.png' },
			{ id: 3, title: 'Xavier Catholic Education Trust', img: 'assets/img/custom/3.jpg' },
			{ id: 4, title: 'Eton Dorney Independent School', img: 'assets/img/custom/4.jpg' }
		]
	}

	getCarrerAdvice() {
		this.carrerAdvice = [
			{ id: 1, title: 'Lorem Ipsum', description: 'Lorem ipsum', img: 'assets/img/custom/5.jpg' },
			{ id: 2, title: 'Lorem Ipsum', description: 'Lorem ipsum', img: 'assets/img/custom/5.jpg' },
			{ id: 3, title: 'Lorem Ipsum', description: 'Lorem ipsum', img: 'assets/img/custom/5.jpg' },
		]
	}

	getHowCanWeHelp() {
		this.howCanWeHelp = [
			{ id: 1, title: 'Carrer Advice Hub', description: 'From schemes of work to school and staffing' },
			{ id: 2, title: 'Teaching in the UK', description: 'From schemes of work to school and staffing' }
		]
	}

	getLocations() {
		this.locations = [
			{ id: 1, name: 'Tokyo', img: 'assets/img/custom/5.jpg' },
			{ id: 2, name: 'London', img: 'assets/img/custom/5.jpg' },
			{ id: 3, name: 'Warsaw', img: 'assets/img/custom/5.jpg' },
		]
	}
}
