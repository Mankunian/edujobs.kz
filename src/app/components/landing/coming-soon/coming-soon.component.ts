import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-coming-soon',
	templateUrl: './coming-soon.component.html',
	styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	constructor() { }

	ngOnInit() {
		setInterval(() => {
			var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
			this.countDown(countDownDate);
		}, 1000);

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

