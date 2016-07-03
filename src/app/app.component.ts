import { Component } from "@angular/core";
import { MdToolbar } from '@angular2-material/toolbar';

import "../../node_modules/material-design-icons/iconfont/material-icons.css";
import "../public/css/material-icons.css";
import "../public/css/roboto.css";
import "../public/css/styles.css";

@Component({
  selector: "ng-app",
  styles: [require("./app.component.css")],
  template: require("./app.component.html"),
  directives: [MdToolbar]
})
export class AppComponent { }
