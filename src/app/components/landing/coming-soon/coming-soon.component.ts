import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';


export class User {
	position: string;
	email: string;
	fullName: string;
	region: string;
}


@Component({
	selector: 'app-coming-soon',
	templateUrl: './coming-soon.component.html',
	styleUrls: ['./coming-soon.component.scss'],
	providers: [MessageService]
})
export class ComingSoonComponent implements OnInit {
	user: User = new User();
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	invalidForm: boolean;
	btnDisabled: boolean;
	constructor(private messageService: MessageService) { }

	ngOnInit() {
		setInterval(() => {
			var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
			this.countDown(countDownDate);
		}, 1000);

	}

	submitForm(user) {
		if (!user.position || !user.region) {
			this.invalidForm = true;
			this.messageService.add({ severity: 'warn', summary: 'Внимание', detail: 'Заполните пожалуйста поля' });
		} else {
			this.invalidForm = false;
			this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
		}
	}

	countDown(countDownDate) {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds

		this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
		this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
	}
}

