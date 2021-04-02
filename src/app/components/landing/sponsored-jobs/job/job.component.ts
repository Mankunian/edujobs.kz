import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
	products: any;

	responsiveOptions; jobInfo: any;


	constructor(private share: ShareDataService) {
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
	}

	ngOnInit(): void {
		this.jobInfo = JSON.parse(sessionStorage.getItem('jobInfo'));
		this.changeBagdeStatusColor();
		this.jobsList();
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
}
