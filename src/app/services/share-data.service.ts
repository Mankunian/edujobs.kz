import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShareDataService {

	private messageSource = new BehaviorSubject(0);
	currentMessage = this.messageSource.asObservable();

	constructor(private http: HttpClient) { }
	getProductsSmall() {
		return this.http.get<any>('assets/json/jobs-small.json')
			.toPromise()
			.then(res => res.data)
			.then(data => { return data; });
	}

	shareCompanyInfo(item: any) {
		this.messageSource.next(item)
	}
}
