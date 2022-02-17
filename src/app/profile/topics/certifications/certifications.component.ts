import { Component, OnInit } from '@angular/core';
import { Certifications } from '@app/shared/helpers/certifications';


interface ICertification {
	name: string;
	institution: string;
	end: string;
	url?: string;
	credential?: string;
}

@Component({
	selector: 'app-certifications',
	templateUrl: './certifications.component.html',
	styles: [''],
})
export class CertificationsComponent implements OnInit {
	certifications: ICertification[];

	constructor() {}

	ngOnInit() {
		this.certifications = Certifications;
	}
}
