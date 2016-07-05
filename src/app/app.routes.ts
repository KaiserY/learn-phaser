import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { LinkComponent } from "./link/link.component";
import { FilesComponent } from "./files/files.component";
import { NotFoundComponent } from "./notfound/notfound.component";

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'link/:id', component: LinkComponent },
  { path: 'files', component: FilesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
