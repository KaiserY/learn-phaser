import { Component } from "@angular/core";
import { MdButton } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { ROUTER_DIRECTIVES } from '@angular/router';

import "../../node_modules/material-design-lite/material.min.css";
import "../../node_modules/material-design-lite/material.min.js";
import "../../node_modules/material-design-icons/iconfont/material-icons.css";
import "../public/css/material-icons.css";
import "../public/css/roboto.css";
import "../public/css/styles.css";

@Component({
  selector: "ng-app",
  styles: [require("./app.component.css")],
  template: require("./app.component.html"),
  directives: [
    ROUTER_DIRECTIVES,
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdButton,
    MD_LIST_DIRECTIVES
  ]
})
export class AppComponent {
  linkList = [
    {
      id: 1,
      icon: "insert_link"
    },
    {
      id: 2,
      icon: "insert_link"
    }
  ];
}
