import { Component, OnInit } from '@angular/core';



import { MenuItem } from 'primeng/api';




import { AppMainComponent } from '@app/app.main.components';



@Component({

  selector: 'app-topbar',

  templateUrl: './header.component.html',

})

export class HeaderComponent implements OnInit {

  items: MenuItem[];



  activeLanguage: string;



  constructor(

    public appMain: AppMainComponent,


  ) { }



  ngOnInit() {



  }



}
