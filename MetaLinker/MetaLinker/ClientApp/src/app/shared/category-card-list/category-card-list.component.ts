import { Component, OnInit, Input } from '@angular/core';
import { CategoryInfo } from 'src/app/core/classes/category-info';

@Component({
  selector: 'app-category-card-list',
  templateUrl: './category-card-list.component.html',
  styleUrls: ['./category-card-list.component.css']
})
export class CategoryCardListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

  @Input() categories: CategoryInfo[]
  
}
