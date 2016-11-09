import { Component, ViewEncapsulation, OnInit } from "@angular/core";

import { AppState } from './app.service';

@Component({
  selector: "ng-app",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
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

  constructor(public appState: AppState) {
    this.appState.state.version = 1;
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
