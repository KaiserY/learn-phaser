import { Component, ViewEncapsulation } from "@angular/core";

import { AppState } from './app.service';

// import "../../node_modules/material-design-lite/material.min.css";
// import "../../node_modules/material-design-lite/material.min.js";
// import "../../node_modules/material-design-icons/iconfont/material-icons.css";
// import "../public/css/material-icons.css";
// import "../public/css/roboto.css";
// import "../public/css/styles.css";

@Component({
  selector: "ng-app",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html"
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

  constructor(public appState: AppState) { }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
