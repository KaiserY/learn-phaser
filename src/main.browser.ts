/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';

/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));
}

main();

// import { bootstrap } from "@angular/platform-browser-dynamic";
// import { enableProdMode } from "@angular/core";
// import { AppComponent } from "./app/app.component";
// import { APP_ROUTER_PROVIDERS } from './app/app.routes';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// if (process.env.ENV === "production") {
//   enableProdMode();
// }

// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS,
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ]).catch(err => console.error(err));
