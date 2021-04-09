import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
	products: any;
	responsiveOptions;
	jobInfo: any;


	constructor(private share: ShareDataService, private _router: Router) {
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '768px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '560px',
				numVisible: 1,
				numScroll: 1
			}
		];
		this.jobInfo = JSON.parse(sessionStorage.getItem('jobInfo'));
	}

	ngOnInit(): void {

		console.log(this.jobInfo)
		if (this.jobInfo) {
			this.changeBagdeStatusColor();
			this.jobsList();
		}
	}

	changeBagdeStatusColor() {
		this.jobInfo.status.forEach(stat => {
			if (stat.id === 1) {
				stat.severity = "warning";
			} else if (stat.id === 2) {
				stat.severity = 'danger'
			} else if (stat.id === 3) {
				stat.severity = 'success'
			}
		});
	}

	jobsList() {
		this.share.getProductsSmall().then(products => {
			this.products = products;
		});
	}

	searchJobsBySchool(item) {
		console.log(item);
		let school = item.school;
		let filterParams = [school];
		sessionStorage.setItem('filterParams', JSON.stringify(filterParams));
		this._router.navigate(['/main'])
	}

	viewSchoolCareerSite(item) {
		console.log(item);
		let schoolId = item.id;
		sessionStorage.setItem('companyInfo', JSON.stringify(item))
		this._router.navigate(['company', schoolId])
	}

}
