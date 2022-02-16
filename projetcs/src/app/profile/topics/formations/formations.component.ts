import { Component, OnInit } from '@angular/core';
import { Formations } from '@app/shared/helpers/formations';

interface IFormation {
	name: string;
	institution: string;
	end: string;
	url?: string;
	credential?: string;
}

@Component({
	selector: 'app-formations',
	templateUrl: './formations.component.html',
	styles: [''],
})
export class FormationsComponent implements OnInit {
	formations: IFormation[];

	constructor() {}

	ngOnInit() {
		this.formations = Formations;
	}
}
