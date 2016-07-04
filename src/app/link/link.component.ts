import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: "ng-link",
  styles: [require("./link.component.css")],
  template: require("./link.component.html"),
  directives: []
})
export class LinkComponent implements OnInit, OnDestroy {
  private sub: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
