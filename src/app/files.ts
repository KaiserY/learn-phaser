export interface Resource {

  id: number;
  name: string;
  type: string;
  createdDate: Date;
}

export class File implements Resource {

  id: number;
  name: string;
  type: string;
  createdDate: Date;

  size: number;

  constructor(id: number, name: string, createdDate: Date, size: number) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.size = size;

    this.type = "file";
  }
}

export class Folder implements Resource {

  id: number;
  name: string;
  type: string;
  createdDate: Date;

  content: Resource[];

  constructor(id: number, name: string, createdDate: Date, content: Resource[]) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.content = content;

    this.type = "folder";
  }
}
