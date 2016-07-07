import { Component } from "@angular/core";
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdButton } from '@angular2-material/button';

@Component({
  selector: "ng-files",
  styles: [require("./files.component.css")],
  template: require("./files.component.html"),
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton
  ]
})
export class FilesComponent {
  expandmore: boolean = false;
  expandless: boolean = false;

  toggle() {
    if (!this.expandmore && !this.expandless) {
      this.expandmore = true;
      this.expandless = false;
    } else if (this.expandmore) {
      this.expandmore = false;
      this.expandless = true;
    } else if (this.expandless) {
      this.expandmore = true;
      this.expandless = false;
    } else {
      this.expandmore = false;
      this.expandless = false;
    }
  };
}
