import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RestService {

	constructor(private http: HttpClient) { }

	getAllCountries() {
		return this.http.get('https://restcountries.eu/rest/v2/all')
	}
}
