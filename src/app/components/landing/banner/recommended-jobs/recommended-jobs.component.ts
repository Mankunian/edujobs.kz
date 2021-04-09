import { Component, OnInit } from '@angular/core';
import { JobService } from './jobs.service';
import { Job } from './job';


@Component({
	selector: 'app-recommended-jobs',
	templateUrl: './recommended-jobs.component.html',
	styleUrls: ['./recommended-jobs.component.scss'],
	providers: [JobService]
})
export class RecommendedJobsComponent implements OnInit {
	products: Job[];
	responsiveOptions;
	constructor(private jobService: JobService) {
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '768px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '560px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}



	ngOnInit(): void {
		this.jobService.getProductsSmall().then(products => {
			this.products = products;
		});
	}

}
