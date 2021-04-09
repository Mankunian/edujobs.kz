import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RestService } from 'src/app/services/rest.service';


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
	providers: [MessageService],
	encapsulation: ViewEncapsulation.None
})
export class ComingSoonComponent implements OnInit {
	user: User = new User();
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	btnDisabled: boolean;
	invalidFormRegion: boolean;
	invalidFormPosition: boolean;
	display: boolean;
	constructor(private messageService: MessageService, private _http: RestService) { }

	ngOnInit() {
		setInterval(() => {
			var countDownDate = new Date("May 5, 2021 00:05:00").getTime();
			this.countDown(countDownDate);
		}, 1000);

	}

	validateForm(user) {
		if (!user.region && !user.position) {
			alert('Заполните регион и позицию');
			return false;
		} else if (!user.region) {
			alert('Заполните регион');
			return false;
		} else if (!user.position) {
			alert('Заполните позицию');
			return false;
		} else {
			this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
			return this.submitForm(user);
		}
	}

	submitForm(user) {
		alert(true)
		this._http.subscribeService(user).subscribe(data => {
			console.log(data)
		})
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

