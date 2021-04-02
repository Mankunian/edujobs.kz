import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ShareDataService {

	constructor(private http: HttpClient) { }
	getProductsSmall() {
		return this.http.get<any>('assets/json/jobs-small.json')
			.toPromise()
			.then(res => res.data)
			.then(data => { return data; });
	}
}
