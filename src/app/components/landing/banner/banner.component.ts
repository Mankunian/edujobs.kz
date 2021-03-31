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

	constructor(private router: Router,) { }

	ngOnInit(): void {
		this.getMostPopular();
	}

	getMostPopular() {
		this.mostPopular = ['leadership', 'Teaching roles', 'Support roles', 'International', 'Science roles']
	}

	searchJobs() {
		let filterParams = [this.region, this.job_title];
		sessionStorage.setItem('filterParams', JSON.stringify(filterParams));
		this.router.navigate(['/main'])
	}

}
