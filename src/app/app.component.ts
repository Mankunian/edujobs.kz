import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	langs: any[];
	selectedLang: any;
	showPanel: boolean;

	constructor(private router: Router, private translate: TranslateService) {
		translate.setDefaultLang('rus');
		this.langs = [
			{ name: 'Русский', code: 'rus' },
			{ name: 'Қазақша', code: 'kaz' },
			{ name: 'English', code: 'eng' }
		];
	}

	ngOnInit() {
		this.selectedLang = { name: 'Русский', code: 'rus' };
		this.onChangeLang(this.selectedLang)
	}

	onChangeLang(item) {
		console.log(item)
		this.translate.setDefaultLang(item.code);
	}

	onActivate(event) {
		window.scroll(0, 0);
		//or document.body.scrollTop = 0;
		//or document.querySelector('body').scrollTo(0,0)

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
