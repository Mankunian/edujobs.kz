import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
	displayResponsive: boolean;

	ngOnInit(): void {
		this.displayResponsive = true;
		sessionStorage.removeItem('filterParams')
	}
}
