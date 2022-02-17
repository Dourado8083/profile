import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
	selector: 'app-root',
	template: `
		<router-outlet>
			<p-toast
				[breakpoints]="{
					'500px': { width: '90%', marginRight: '0rem', marginLeft: '1%' }
				}"
				[showTransformOptions]="'translateX(95%)'"
			[baseZIndex]="10000"
			></p-toast>
		<!--	<app-loading
				*ngIf="isLoading"
				[detectRoutingOngoing]="false"
			></app-loading> -->
		</router-outlet>
	`,
	styles: [``],
})
export class AppComponent {
	isLoading: boolean = false;

	menuMode = 'static';

	config: any;

	constructor(
		private primengConfig: PrimeNGConfig,

	) {}

	ngOnInit() {
		this.setDefaultConfig();



	}

	setDefaultConfig() {
		this.primengConfig.ripple = true;
		document.documentElement.style.fontSize = '14px';
	}


}
