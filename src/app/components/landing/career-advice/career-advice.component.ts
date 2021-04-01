import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-career-advice',
	templateUrl: './career-advice.component.html',
	styleUrls: ['./career-advice.component.scss']
})
export class CareerAdviceComponent implements OnInit {
	carrerAdvice: { id: number; title: string; description: string; img: string; }[];

	constructor() { }

	ngOnInit(): void {
		this.getCarrerAdvice();
	}

	getCarrerAdvice() {
		this.carrerAdvice = [
			{ id: 1, title: 'International-mindedness is a frame of mind...', description: 'Lorem ipsum', img: 'assets/img/custom/5.jpg' },
			{ id: 2, title: 'Which school is right for you?', description: 'Lorem ipsum', img: 'assets/img/custom/7.jpg' },
			{ id: 3, title: 'My autistic view of education', description: 'Lorem ipsum', img: 'assets/img/custom/8.jpg' },
		]
	}

}
