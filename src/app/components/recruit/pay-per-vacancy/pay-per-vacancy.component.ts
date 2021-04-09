import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-pay-per-vacancy',
	templateUrl: './pay-per-vacancy.component.html',
	styleUrls: ['./pay-per-vacancy.component.scss'],
	providers: [MessageService]
})
export class PayPerVacancyComponent implements OnInit {
	items: { label: string; command: (event: any) => void; }[];
	activeIndex: number = 1;
	constructor(private messageService: MessageService) { }

	ngOnInit(): void {
		this.items = [{
			label: 'Create Advert',
			command: (event: any) => {
				this.activeIndex = 0;
				this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
			}
		},
		{
			label: 'Payment',
			command: (event: any) => {
				this.activeIndex = 2;
				this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
			}
		}
		];
	}

}
