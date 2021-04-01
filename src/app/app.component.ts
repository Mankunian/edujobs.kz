import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	langs: any[];
	selectedLang: any;
	constructor(private router: Router,) {
		this.langs = [
			{ name: 'Русский', code: 'rus' },
			{ name: 'Қазақша', code: 'kaz' },
			{ name: 'English', code: 'eng' }
		];
	}

	/**
	 * Check if the router url contains the specified route
	 *
	 * @param {string} route
	 * @returns
	 * @memberof MyComponent
	 */
	hasRoute(route: string) {
		return this.router.url.includes(route);
	}
}
