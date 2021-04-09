import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-service-section',
	templateUrl: './service-section.component.html',
	styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {
	howCanWeHelp: { id: number; title: string; description: string; }[];

	constructor() { }

	ngOnInit(): void {
		this.getHowCanWeHelp();
	}

	getHowCanWeHelp() {
		this.howCanWeHelp = [
			{ id: 1, title: 'Carrer Advice Hub', description: 'From schemes of work to school and staffing' },
			{ id: 2, title: 'Teaching in the UK', description: 'From schemes of work to school and staffing' }
		]
	}

}
