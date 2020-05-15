import { Component, OnInit, Input } from '@angular/core';
import { CategoryInfo } from 'src/app/core/classes/category-info';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() categoryInfo: CategoryInfo;
  
  constructor() { }

  ngOnInit() {
    console.log(this.categoryInfo);
    
  }

  selectCategory(category) {
    console.log(category);
  }
}
