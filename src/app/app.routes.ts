import { NgModule }from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { LinkComponent } from "./link";
import { FilesComponent } from "./files/Files.component";
import { NotFoundComponent } from "./notfound";

import { DataResolver } from './app.resolver';

const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'link/:id', component: LinkComponent },
  { path: 'files', component: FilesComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
