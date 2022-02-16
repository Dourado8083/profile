import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMenuComponent} from './app.menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMainComponent } from './app.main.components';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ConfigService } from './config/services/app.config.service';
import { PrimeModule } from './shared/modules/prime.modules';
import { SharedCommonModule } from './shared/modules/shared-common.module';
import { AppMenuitemComponent } from './app.menuitem.component';
import { MenuService } from './config/services/app.menu.service';
import { AppConfigComponent } from './app.config.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedCommonModule,
    PrimeModule
  ],
  declarations: [
    AppComponent,
    AppMainComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppConfigComponent
  ],

  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy },


  ConfigService,MenuService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
