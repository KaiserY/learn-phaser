import { Component } from "@angular/core";
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  selector: "ng-files",
  styles: [require("./files.component.css")],
  template: require("./files.component.html"),
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ]
})
export class FilesComponent { }
