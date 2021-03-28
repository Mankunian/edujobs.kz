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
	message: any;
	subscription: Subscription;
	msgs1: ({ severity: string; summary: string; detail: string; icon?: undefined; } | { severity: string; summary: string; detail: string; icon: string; })[];
	hideMessage: boolean;


	constructor(private shareData: ShareDataService) { }

	ngOnInit(): void {
		// this.getMessage();
		this.getParams();
		this.getAccordionList();
		this.getJobList();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getParams() {
		this.subscription = this.shareData.currentMessage.subscribe((response: any) => {
			if (response !== 0) {
				this.message = JSON.parse(response);
				let obj_keys = Object.keys(this.message);
				if (obj_keys.length === 2) {
					this.msgs1 = [
						{ severity: 'custom', summary: this.message.job_title, detail: '', icon: 'pi-file' },
						{ severity: 'custom', summary: this.message.region, detail: '', icon: 'pi-file' }
					];
				} else {
					if (obj_keys[0] === 'job_title') {
						this.msgs1 = [
							{ severity: 'custom', summary: this.message.job_title, detail: '', icon: 'pi-file' }
						];
					} else {
						this.msgs1 = [
							{ severity: 'custom', summary: this.message.region, detail: '', icon: 'pi-file' }
						];
					}

				}
			}
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

	getMessage() {
		this.msgs1 = [
			{ severity: 'custom', summary: 'Custom', detail: '', icon: 'pi-file' }
		];
	}

}
