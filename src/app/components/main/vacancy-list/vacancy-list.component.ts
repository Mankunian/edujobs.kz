import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-vacancy-list',
	templateUrl: './vacancy-list.component.html',
	styleUrls: ['./vacancy-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class VacancyListComponent implements OnInit {
	jobList: any;
	badgeColor: any;
	severity: string;

	constructor(private _router: Router) { }

	ngOnInit(): void {
		this.getJobList();
	}

	changeBagdeStatusColor() {
		this.jobList.forEach(jobs => {
			let status = jobs.status;
			status.forEach(stat => {
				console.log(stat)
				if (stat.id === 1) {
					stat.severity = "warning";
				} else if (stat.id === 2) {
					stat.severity = 'danger'
				} else if (stat.id === 3) {
					stat.severity = 'success'
				}
			});
		});
		console.log(this.jobList)
	}

	getJobList() {
		this.jobList = [
			{
				id: 1,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				startDate: '18th March 2021',
				expires: '12th May 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: [
					{ id: 1, name: 'Job of the week' },
					{ id: 2, name: 'Ending soon' }
				]
			},
			{
				id: 2,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				startDate: '18th March 2021',
				expires: '12th May 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: [{ id: 2, name: 'Ending soon' },]
			},
			{
				id: 3,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				startDate: '18th March 2021',
				expires: '12th May 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: [{ id: 3, name: 'Fast apply' }]
			},
		];
		this.changeBagdeStatusColor();
	}

	routeJobInfo(item) {
		sessionStorage.setItem('jobInfo', JSON.stringify(item));
		let jobId = item.id;
		this._router.navigate(['/job', jobId]);
	}

}
