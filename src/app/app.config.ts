import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
	availableLanguages: Array<{ code: string, name: string }>;
	showBuyPromt: boolean;
}

export const BaseAppConfig: AppConfig = {
	availableLanguages: [{
		code: 'en',
		name: 'Inglés'
	}, {
		code: 'ar',
		name: 'Árabe'
	}, {
		code: 'es',
		name: 'Español'
	}, {
		code: 'fr',
		name: 'Francés'
	}, {
		code: 'id',
		name: 'Indonesio'
	}, {
		code: 'pt',
		name: 'Portugués'
	}],
	showBuyPromt: false
};