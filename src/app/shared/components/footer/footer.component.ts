import { Component } from '@angular/core';
import { AppMainComponent } from '@app/app.main.components';





@Component({

  selector: 'app-footer',

  templateUrl: './footer.component.html',

})

export class FooterComponent {

  currentYear: number;



  constructor(public appMain: AppMainComponent) {

    let date = new Date();

    this.currentYear = date.getFullYear();

  }

}
