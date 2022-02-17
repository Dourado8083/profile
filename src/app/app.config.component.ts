import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from '@config/models/appconfig';
import { AppComponent } from './app.component';
import { ConfigService } from '@config/services/app.config.service';
import { AppMainComponent } from './app.main.components';




@Component({
selector: 'app-config',
templateUrl: './app.config.component.html',
})
export class AppConfigComponent implements OnInit, OnDestroy {
scale: number = 14;



scales: number[] = [11, 12, 13, 14, 15, 16, 17];



config: AppConfig;



subscription: Subscription;



constructor(
public app: AppComponent,
public appMain: AppMainComponent,
public configService: ConfigService,
public primengConfig: PrimeNGConfig,
) {}



ngOnInit() {
this.config = this.configService.config;
this.changeTheme(this.config.theme, this.config.dark); //* Setar tema caso ultimo não seja o default
this.subscription = this.configService.configUpdate$.subscribe(config => {
this.config = config;
this.scale = 14;



this.applyScale();



this.setConfigLocally(this.config);
});
}



onConfigButtonClick(event) {
this.appMain.configActive = !this.appMain.configActive;
this.appMain.configClick = true;
event.preventDefault();
}



incrementScale() {
this.scale++;
this.applyScale();
}



decrementScale() {
this.scale--;
this.applyScale();
}



applyScale() {
document.documentElement.style.fontSize = this.scale + 'px';
}



onRippleChange(ripple) {
this.primengConfig.ripple = ripple;
this.configService.updateConfig({ ...this.config, ...{ ripple } });
this.setConfigLocally({
...this.config,
ripple,
});
}



onInputStyleChange() {
this.configService.updateConfig(this.config);
this.setConfigLocally(this.config);
}



changeTheme(theme: string, dark: boolean) {
let themeElement = document.getElementById('theme-css');
themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
this.configService.updateConfig({ ...this.config, ...{ theme, dark } });
this.setConfigLocally({
...this.config,
dark,
theme,
});
}



setConfigLocally(config: AppConfig) {
localStorage.setItem('@gudourado: config', JSON.stringify(config));
}



ngOnDestroy() {
if (this.subscription) {
this.subscription.unsubscribe();
}
}
}
