import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Subscription } from 'rxjs';

interface CareerGroup {
	name: string,
	code: string
}

interface Phase {
	name: string,
	code: string
}

interface Role {
	name: string,
	id: number
}

interface Institution {
	name: string,
	id: number
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
	subscription: Subscription;

	countries: any[];
	careerGroups: CareerGroup[];
	phaseList: Phase[];
	roleList: Role[];
	institutionList: Institution[];

	selectedCountry: any;
	selectedCareerGroup: any[];
	selectedPhase: any[];
	selectedRole: any[];
	selectedInstitution: any[];
	headerName: string;

	constructor(private rest: RestService, private share: ShareDataService) {
		this.subscription = this.share.currentMessage.subscribe((lang: any) => {
			console.log(lang);
			if (lang.code == 'rus') {
				this.getRus();
			} else {
				this.getEng();
			}
		})
	}

	ngOnInit(): void {


		this.getFilterParams();
		this.getAccordionList();
		this.getCountryList();
		this.getCareerGroups();
		this.getPhaseList();
		this.getRoleList();
		this.getInstitution();
	}

	getCountryList() {
		this.countries = [];
		this.rest.getAllCountries().subscribe((data: any) => {
			let length = data.length;
			console.log(length)
			data.forEach(element => {
				let country = { name: element.name, subregion: element.subregion, flag: element.flag, code: element.cioc };
				this.countries.push(country)
			});

		})
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

	getRoleList() {
		this.roleList = [
			{ id: 1, name: 'Teacher' },
			{ id: 2, name: 'School Governor' },
			{ id: 3, name: 'MIS' },
			{ id: 4, name: 'Headteacher' },
			{ id: 5, name: 'Head of subject' },
			{ id: 6, name: 'Head of department' },
			{ id: 7, name: 'HR Manager' },
			{ id: 8, name: 'Director' },
			{ id: 9, name: 'Deputy Headteacher' },
		]
	}

	getInstitution() {
		this.institutionList = [
			{ id: 1, name: 'Академия' },
			{ id: 2, name: 'Колледж' },
			{ id: 3, name: 'Группа' },
			{ id: 4, name: 'Независимая школа' },
			{ id: 5, name: 'Школа местного самоуправления' },
			{ id: 6, name: 'Университетский технологический колледж (UTC)' },
		]
	}

	getAccordionList() {
		let lang = JSON.parse(sessionStorage.lang);
		if (lang.code == 'eng') {
			this.getEng();
		} else if (lang.code == 'rus') {
			this.getRus();
		}

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

	getEng() {
		return this.accordionList = [
			{ id: 1, name: 'Location' },
			{ id: 2, name: 'Career group' },
			{ id: 3, name: 'Phase' },
			{ id: 4, name: 'Role' },
			{ id: 5, name: 'Institution' },
			{ id: 6, name: 'Subject' }
		];
	}

	getRus() {
		return this.accordionList = [
			{ id: 1, name: 'Страна' },
			{ id: 2, name: 'Должностная группа' },
			{ id: 3, name: 'Уровень' },
			{ id: 4, name: 'Роль' },
			{ id: 5, name: 'Организация' },
			{ id: 6, name: 'Предмет' }
		];
	}

}
