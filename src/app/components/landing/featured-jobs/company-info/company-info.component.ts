import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
	selector: 'app-company-info',
	templateUrl: './company-info.component.html',
	styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
	companyInfo: any;
	subscription: Subscription;
	constructor() { }

	ngOnInit(): void {
		this.getCompanyInfo();
	}

	getCompanyInfo() {
		this.companyInfo = JSON.parse(sessionStorage.getItem('companyInfo'));
	}
}
