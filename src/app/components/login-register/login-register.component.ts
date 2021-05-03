import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
	selector: 'app-login-register',
	templateUrl: './login-register.component.html',
	styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
	roles: { id: number; name: string; }[];
	name: null;
	surname: null;
	email: null;
	pass: null;

	selectedRole: any;

	constructor(private http: RestService) {
		this.roles = [
			{ id: 1, name: 'Администратор' },
			{ id: 2, name: 'Соискатель' },
			{ id: 3, name: 'Работодатель' }
		]
	}

	ngOnInit(): void {
	}


	registerUser() {
		let userArr = [];
		userArr['name'] = this.name;
		userArr['surname'] = this.surname;
		userArr['email'] = this.email;
		userArr['password'] = this.pass;
		userArr['role_id'] = this.selectedRole.id;

		console.log(userArr)



		// this.http.registerService(userArr).subscribe(data => {
		// 	console.log(data)
		// }, error => {
		// 	console.log(error)
		// })
	}

}
