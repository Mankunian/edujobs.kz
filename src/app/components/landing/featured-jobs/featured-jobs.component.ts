import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-featured-jobs',
	templateUrl: './featured-jobs.component.html',
	styleUrls: ['./featured-jobs.component.scss']
})
export class FeaturedJobsComponent implements OnInit {
	featuredSchools: any[];

	constructor(private _router: Router, private data: ShareDataService) { }

	ngOnInit(): void {
		this.getFeaturedJobs();
	}

	getFeaturedJobs() {
		this.featuredSchools = [
			{ id: 1, title: 'Республиканские физико-математические школы', shortName: 'РФМШ', img: 'assets/img/custom/q1.png' },
			{ id: 2, title: 'Назарбаев интеллектуальные школы', shortName: 'NU', img: 'assets/img/custom/q2.png' },
			{ id: 3, title: 'Лицеи “Білім-Инновация”', shortName: 'Bilim', img: 'assets/img/custom/q3.png' },
			{ id: 4, title: 'Suleyman Demirel University', shortName: 'SDU', img: 'assets/img/custom/q4.png' }
		]
	}

	viewCompany(item) {
		console.log(item);
		let companyId = item.id;
		sessionStorage.setItem('companyInfo', JSON.stringify(item))
		this._router.navigate(['company', companyId])
	}

	saveCompany(item) { }

	viewJobs(item) {
		let filterParams = [item.title];
		sessionStorage.setItem('filterParams', JSON.stringify(filterParams));
		this._router.navigate(['/main']);
	}
}
