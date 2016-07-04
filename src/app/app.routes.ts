import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LinkComponent } from "./link/link.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'link/:id', component: LinkComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
