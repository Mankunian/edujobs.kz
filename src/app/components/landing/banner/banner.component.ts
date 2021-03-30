import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
	region: any;
	job_title: any;
	mostPopular: any[];

	constructor(private shareData: ShareDataService, private router: Router,) { }

	ngOnInit(): void {
		this.getMostPopular();
	}

	getMostPopular() {
		this.mostPopular = ['leadership', 'Teaching roles', 'Support roles', 'International', 'Science roles']
	}

	searchJobs() {
		let search_params = { 'region': this.region, 'job_title': this.job_title };
		this.shareData.changeMessage(JSON.stringify(search_params))
		this.router.navigate(['/main'])
	}

}
