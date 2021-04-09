import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RestService {
	url: string = ''
	constructor(private http: HttpClient) { }

	getAllCountries() {
		return this.http.get('https://restcountries.eu/rest/v2/all')
	}

	subscribeService(user) {
		return this.http.post(this.url, user);
	}
}
