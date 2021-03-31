import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface CareerGroup {
	name: string,
	code: string
}

interface Phase {
	name: string,
	code: string
}

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FilterComponent implements OnInit {
	accordionList: any;
	filterParams: any;
	selectedCountry: any;
	countries: any[];
	careerGroups: CareerGroup[];
	phaseList: Phase[];
	selectedCareerGroup: any[];
	selectedPhase: any[];

	constructor() {
	}

	ngOnInit(): void {
		this.getFilterParams();
		this.getAccordionList();
		this.getCountryList();
		this.getCareerGroups();
		this.getPhaseList();
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

	getCareerGroups() {
		this.careerGroups = [
			{ name: 'Leadership/Management', code: 'NY' },
			{ name: 'Support/Non-Teaching', code: 'RM' },
			{ name: 'Teaching/Lecturing', code: 'LDN' }
		];
	}

	getPhaseList() {
		this.phaseList = [
			{ name: 'Primary', code: 'NY' },
			{ name: 'Secondary', code: 'RM' },
			{ name: 'Senior', code: 'LDN' },
			{ name: 'Sixth form', code: 'LDN' },
			{ name: 'Nursery', code: 'LDN' }
		];
	}

	getAccordionList() {
		this.accordionList = [
			{ id: 1, name: 'Location' },
			{ id: 2, name: 'Career group' },
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
