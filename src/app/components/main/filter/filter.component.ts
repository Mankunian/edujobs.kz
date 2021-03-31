import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
	accordionList: any;
	filterParams: any;
	selectedCountry: string;
	countries: any[];

	constructor() {
	}

	ngOnInit(): void {
		this.getCountryList();
		this.getAccordionList();
		this.getFilterParams();
	}

	getCountryList() {

		this.countries = [
			{ name: 'Australia', code: 'AU' },
			{ name: 'Brazil', code: 'BR' },
			{ name: 'China', code: 'CN' },
			{ name: 'Egypt', code: 'EG' },
			{ name: 'France', code: 'FR' },
			{ name: 'Germany', code: 'DE' },
			{ name: 'India', code: 'IN' },
			{ name: 'Japan', code: 'JP' },
			{ name: 'Spain', code: 'ES' },
			{ name: 'United States', code: 'US' }
		];
	}

	getAccordionList() {
		this.accordionList = [
			{ id: 1, name: 'Location' },
			{ id: 2, name: 'Carrer group' },
			{ id: 3, name: 'Phase' },
			{ id: 4, name: 'Role' },
			{ id: 5, name: 'Institution' },
			{ id: 6, name: 'Subject' },
			{ id: 7, name: 'Hours' },
		]
	}

	getFilterParams() {
		if (sessionStorage.filterParams) {
			this.filterParams = JSON.parse(sessionStorage.filterParams);
		}
	}

	removeParam(selectedFilter) {
		this.filterParams.forEach((element, index) => {
			if (selectedFilter === element) {
				this.filterParams.splice(index, 1)
			}
		});
		sessionStorage.setItem('filterParams', JSON.stringify(this.filterParams));
	}

}
