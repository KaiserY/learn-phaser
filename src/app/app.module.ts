import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { IonicApp, IonicModule } from 'ionic-angular';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { LinkComponent } from "./link";
import { FilesComponent } from "./files/Files.component";
import { NotFoundComponent } from "./notfound";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  entryComponents: [AppComponent],
  bootstrap: [IonicApp],
  declarations: [
    AppComponent,
    AboutComponent,
    LinkComponent,
    HomeComponent,
    NotFoundComponent,
    FilesComponent
  ],
  imports: [ // import Angular's modules
    IonicModule.forRoot(AppComponent),
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
    // AppRoutingModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
}
