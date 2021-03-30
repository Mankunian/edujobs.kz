import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sponsored-jobs',
	templateUrl: './sponsored-jobs.component.html',
	styleUrls: ['./sponsored-jobs.component.scss']
})
export class SponsoredJobsComponent implements OnInit {
	sponsoredJobs: any;

	constructor() { }

	ngOnInit(): void {
		this.getSponsoredJobs();
	}



	getSponsoredJobs() {
		this.sponsoredJobs = [
			{ id: 1, title: 'Principal', location: 'Greater London', school: 'The Hyde school', price: 'MPS', time: 'Permanent' },
			{ id: 2, title: 'Key stage 2 class Teacher', location: 'Manchester', school: 'The Hyde school', price: 'MPS', time: 'Permanent' },
			{ id: 3, title: 'Lecturer in Digital Computer', location: 'Greater London', school: 'The Hyde school', price: 'MPS', time: 'Permanent' }
		]
	}

}
