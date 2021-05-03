import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RestService {
	url: string = 'http://back.edujobs.kz/api/'
	constructor(private http: HttpClient) { }

	getAllCountries() {
		return this.http.get('https://restcountries.eu/rest/v2/all')
	}

	submitAppService(user) {
		console.log(user)
		return this.http.post(this.url + 'leads', user);
	}

	getReqListService() {
		return this.http.get(this.url + 'leads')
	}

	registerService(userInfo) {
		console.log(userInfo)
		return this.http.post(this.url + 'register', userInfo)
	}
}
