import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ShareDataService } from "../../services/share-data.service";
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	providers: [MessageService],
	encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy {
	accordionList: any;
	jobList: any[];
	message: string;
	subscription: Subscription;


	constructor(private shareData: ShareDataService) { }

	ngOnInit(): void {
		this.getParams();
		this.getAccordionList();
		this.getJobList();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getParams() {
		this.subscription = this.shareData.currentMessage.subscribe(message1 => {
			this.message = message1;
		})
	}

	getAccordionList() {
		this.accordionList = [
			{ id: 1, name: 'Location' },
			{ id: 2, name: 'Carrer group' },
			{ id: 3, name: 'Phase' },
			{ id: 4, name: 'Role' },
			{ id: 5, name: 'Institution' },
			{ id: 6, name: 'Subject' },
			{ id: 7, name: 'Hours' },
		]
	}

	getJobList() {
		this.jobList = [
			{
				id: 1,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: [
					{ id: 1, name: 'Job of the week' },
					{ id: 2, name: 'Ending soon' },
					{ id: 3, name: 'Fast apply' }
				]
			},
			{
				id: 2,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: []
			},
			{
				id: 3,
				job_title: 'Group director of digital delivery and improvement',
				location: 'Barnsley, South Yorkshire',
				salary: '$52, 324',
				posted: '18th March 2021',
				school: 'Barnsley college',
				contact_term: 'Permanent',
				description: 'Barnsley College is an exciting place to be. In recent times weve enjoyed considerable success and oreputation for quality and innovation is well known.',
				status: []
			},
		]
	}

}
