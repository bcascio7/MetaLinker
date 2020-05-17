import { Component, OnInit } from '@angular/core';
import { CategoryInfo } from '../core/classes/category-info';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  categories: CategoryInfo[];

  constructor(private categoryService: CategoryService,) { }

  ngOnInit() {
    this.categoryService.getCategoriesByUser().subscribe((categories: CategoryInfo[]) => {
      this.categories = categories;
      console.log(this.categories);
    }, (err) => {
      console.log(`Error occurred during metaService getCall: ${err}`)
    });
  }
}
