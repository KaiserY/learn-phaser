import { Component } from "@angular/core";
import { MdButton } from "@angular2-material/button";

import { FilesService } from "./files.service";
import { Folder, Resource, File } from '../files';

@Component({
  selector: "ng-files",
  styleUrls: ["./files.component.css"],
  templateUrl: "./files.component.html",
  providers: [FilesService]
})
export class FilesComponent {
  content: Resource[];
  expands: any = {
    "name": "more",
    "createdDate": "",
    "size": ""
  };

  constructor(private filesService: FilesService) {
    this.content = this.filesService.getFiles();
  }

  sort(type: string) {
    if (this.expands[type] === "more") {
      this.expands[type] = "less";
    } else {
      this.expands[type] = "more";
    }

    switch (type) {
      case "size":
        this.expands.name = "";
        this.expands.createdDate = "";
        break;
      case "createdDate":
        this.expands.name = "";
        this.expands.size = "";
        break;
      case "name":
      default:
        this.expands.createdDate = "";
        this.expands.size = "";
        break;
    }
  };
}
