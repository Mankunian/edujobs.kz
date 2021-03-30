import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-featured-jobs',
	templateUrl: './featured-jobs.component.html',
	styleUrls: ['./featured-jobs.component.scss']
})
export class FeaturedJobsComponent implements OnInit {
	featuredSchools: { id: number; title: string; img: string; }[];

	constructor() { }

	ngOnInit(): void {
		this.getFeaturedJobs();
	}

	getFeaturedJobs() {
		this.featuredSchools = [
			{ id: 1, title: 'The Pivot Academy', img: 'assets/img/custom/1.jpg' },
			{ id: 2, title: 'The Hyde School', img: 'assets/img/custom/2.png' },
			{ id: 3, title: 'Xavier Catholic Education Trust', img: 'assets/img/custom/3.jpg' },
			{ id: 4, title: 'Eton Dorney Independent School', img: 'assets/img/custom/4.jpg' }
		]
	}

}
