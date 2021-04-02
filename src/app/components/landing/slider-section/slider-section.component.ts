import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
	selector: 'app-slider-section',
	templateUrl: './slider-section.component.html',
	styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit {
	images: any[];
	constructor(config: NgbCarouselConfig, private photoService: PhotoService) {
		config.interval = 5000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
		config.wrap = false;
	}

	ngOnInit(): void {
		this.photoService.getImages().then(images => this.images = images);
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
