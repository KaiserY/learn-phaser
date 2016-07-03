import { Component, ViewEncapsulation } from "@angular/core";
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

import "../../node_modules/material-design-icons/iconfont/material-icons.css";
import "../public/css/material-icons.css";
import "../public/css/roboto.css";
import "../public/css/styles.css";

@Component({
  selector: "ng-app",
  styles: [require("./app.component.css")],
  template: require("./app.component.html"),
  encapsulation: ViewEncapsulation.None,
  directives: [
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdButton
  ]
})
export class AppComponent { }
