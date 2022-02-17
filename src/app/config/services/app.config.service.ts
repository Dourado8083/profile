import { Injectable } from '@angular/core';
import { AppConfig } from '@config/models/appconfig';
import { Subject } from 'rxjs';

const defaultConfig = {
theme: 'dark',
dark: true,
inputStyle: 'outlined',
ripple: true,
};

@Injectable({
providedIn: 'root',
})
export class ConfigService {

config: AppConfig =
JSON.parse(localStorage.getItem('@gudourado: config')) || defaultConfig;

private configUpdate = new Subject<AppConfig>();

configUpdate$ = this.configUpdate.asObservable();

updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
}

getConfig() {
    return this.config;
    }
}
