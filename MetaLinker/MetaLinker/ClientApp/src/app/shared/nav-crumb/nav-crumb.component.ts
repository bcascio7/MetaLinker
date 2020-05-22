import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-crumb',
  templateUrl: './nav-crumb.component.html',
  styleUrls: ['./nav-crumb.component.css']
})
export class NavCrumbComponent implements OnInit {
  angleRight = faAngleRight;
  routes = [];
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    this.routes = this.router.url.split('/').filter((route) => route !== "");
    console.log(this.routes);
  }

}
