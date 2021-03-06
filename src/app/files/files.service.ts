import { Injectable } from '@angular/core';
import { Folder, Resource, File } from '../files';

@Injectable()
export class FilesService {
  files: Resource[] = [];

  constructor() {
    for (var i = 0; i < 5; i++) {
      this.files.push(new Folder(i, "folder " + (i + 1), new Date(), []));

      for (var j = 0; j < i; j++) {
        (<Folder>this.files[i]).content.push(new File(j, "file " + (j + 1), new Date(), j * Math.random() * 1000));
      }
    }

    for (var i = 0; i < 5; i++) {
      this.files.push(new File(i, "file " + (i + 1), new Date(), i));
    }
  }

  getFiles(): Resource[] {
    return this.files;
  }

  sortByName(resources: Resource[]): Resource[] {
    var folders = this.extractFolders(resources);
    var files = this.extractFiles(resources);

    return null;
  }

  extractFiles(resources: Resource[]): File[] {
    return null;
  }

  extractFolders(resources: Resource[]): Folder[] {
    return null;
  }
}
