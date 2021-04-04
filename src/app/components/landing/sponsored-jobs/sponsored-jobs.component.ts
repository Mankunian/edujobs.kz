import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-sponsored-jobs',
	templateUrl: './sponsored-jobs.component.html',
	styleUrls: ['./sponsored-jobs.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SponsoredJobsComponent implements OnInit {
	sponsoredJobs: any;

	constructor(public _router: Router) { }

	ngOnInit(): void {
		this.getSponsoredJobs();
	}

	getSponsoredJobs() {
		this.sponsoredJobs = [
			{
				id: 1,
				title: 'Principal',
				location: 'Greater London',
				school: 'The Hyde school',
				hours: 'Full time',
				img: '1.jpg',
				status: [
					{ id: 1, name: 'Job of the week' },
					{ id: 2, name: 'Ending soon' }
				],
				salary: '$52, 324',
				posted: '18th March 2021',
				contact_term: 'Permanent',
				startDate: '18th March 2021',
				expires: '12th May 2021',
			},
			{
				id: 2,
				title: 'Key stage 2 class Teacher',
				location: 'Manchester',
				school: 'The Hyde school',
				salary: '$52, 324',
				hours: 'Full time',
				img: '1.1.jpg',
				contact_term: 'Permanent',
				posted: '18th March 2021',
				startDate: '18th March 2021',
				expires: '12th May 2021',
				status: [
					{ id: 1, name: 'Job of the week' },
					{ id: 2, name: 'Ending soon' }
				]
			},
			{
				id: 3,
				title: 'Lecturer in Digital Computer',
				location: 'Greater London',
				school: 'The Hyde school',
				salary: '$52, 324',
				hours: 'Full time',
				img: '1.2.jpg',
				contact_term: 'Permanent',
				posted: '18th March 2021',
				startDate: '18th March 2021',
				expires: '12th May 2021',
				status: [
					{ id: 1, name: 'Job of the week' },
					{ id: 2, name: 'Ending soon' }
				]
			}
		]
	}

	routeJobInfo(item) {
		sessionStorage.setItem('jobInfo', JSON.stringify(item));
		let jobId = item.id;
		this._router.navigate(['job', jobId]);
	}

	searchJobsBySchool(item) {
		let school = item.school;
		let filterParams = [school];
		sessionStorage.setItem('filterParams', JSON.stringify(filterParams));
		this._router.navigate(['/main'])
	}


}
