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
  expands: any = {
    "a": {
      more: false,
      less: false
    },
    "b": {
      more: false,
      less: false
    },
    "c": {
      more: false,
      less: false
    }
  };


  toggle(type: any) {
    if (!this.expands[type].more && !this.expands[type].less) {
      this.expands[type].more = true;
      this.expands[type].less = false;
    } else if (this.expands[type].more) {
      this.expands[type].more = false;
      this.expands[type].less = true;
    } else if (this.expands[type].less) {
      this.expands[type].more = true;
      this.expands[type].less = false;
    } else {
      this.expands[type].more = false;
      this.expands[type].less = false;
    }
  };
}
