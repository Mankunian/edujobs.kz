import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-featured-jobs',
	templateUrl: './featured-jobs.component.html',
	styleUrls: ['./featured-jobs.component.scss']
})
export class FeaturedJobsComponent implements OnInit {
	featuredSchools: { id: number; title: string; img: string; }[];

	constructor(private _router: Router) { }

	ngOnInit(): void {
		this.getFeaturedJobs();
	}

	getFeaturedJobs() {
		this.featuredSchools = [
			{ id: 1, title: 'Республиканские физико-математические школы', img: 'assets/img/custom/1.jpg' },
			{ id: 2, title: 'Назарбаев интеллектуальные школы', img: 'assets/img/custom/2.png' },
			{ id: 3, title: 'Лицеи “Білім-Инновация”', img: 'assets/img/custom/3.jpg' },
			{ id: 4, title: 'Suleyman Demirel University', img: 'assets/img/custom/4.jpg' }
		]
	}

	viewCompany(item) {
		console.log(item);
		let companyId = item.id;
		this._router.navigate(['company', companyId])
	}

	saveCompany(item) { }

	viewJobs(item) { }
}
