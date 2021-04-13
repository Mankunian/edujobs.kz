import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
	selector: 'app-slider-section',
	templateUrl: './slider-section.component.html',
	styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit {
	images: any[];
	selectedLang: any;
	constructor(config: NgbCarouselConfig, private photoService: PhotoService, private router: Router) {
		config.interval = 5000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
		config.wrap = false;
	}

	ngOnInit(): void {
		this.photoService.getImages().then((images: any) => {
			this.images = images;
		});
	}

	getLang(lang) {
		this.selectedLang = lang;
	}

	searchJob(item) {
		let region = item.name;
		let filterParams = [region];
		sessionStorage.setItem('filterParams', JSON.stringify(filterParams));
		this.router.navigate(['/main'])
	}

	responsiveOptions: any[] = [
		{
			breakpoint: '1024px',
			numVisible: 5
		},
		{
			breakpoint: '768px',
			numVisible: 3
		},
		{
			breakpoint: '560px',
			numVisible: 1
		}
	];
}
