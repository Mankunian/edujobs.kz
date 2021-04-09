import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-location-guides',
	templateUrl: './location-guides.component.html',
	styleUrls: ['./location-guides.component.scss']
})
export class LocationGuidesComponent implements OnInit {
	locations: { id: number; name: string; img: string; }[];

	constructor() { }

	ngOnInit(): void {
		this.getLocations();
	}


	getLocations() {
		this.locations = [
			{ id: 1, name: 'Tokyo', img: 'assets/img/custom/5.jpg' },
			{ id: 2, name: 'London', img: 'assets/img/custom/5.jpg' },
			{ id: 3, name: 'Warsaw', img: 'assets/img/custom/5.jpg' },
		]
	}

}
