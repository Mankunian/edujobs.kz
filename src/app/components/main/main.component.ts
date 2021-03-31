import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ShareDataService } from "../../services/share-data.service";
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	providers: [MessageService],
	encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {


	constructor() { }

	ngOnInit(): void {
	}






}
