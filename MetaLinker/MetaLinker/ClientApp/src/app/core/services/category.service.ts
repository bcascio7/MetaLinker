import { Injectable } from '@angular/core';
import { CategoryInfo } from '../classes/category-info';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private testObject = {
    url: new URL("https://www.google.com"),
    imageUrl: new URL('https://secure.img1-fg.wfcdn.com/im/40349641/resize-h600-w600%5Ecompr-r85/5542/55420327/Lecuyer+Floral+Beige%2FIvory+Indoor+%2F+Outdoor+Area+Rug.jpg'),
    title: 'Test Title',
    description: 'Test Description'
  };

  private _testCategory = new CategoryInfo(this.testObject.title, this.testObject.imageUrl)
  private _categories: CategoryInfo[] = [];
  private _currentCategory: CategoryInfo;

  constructor() { }

  getCurrentCategories(): Observable<CategoryInfo[]> {
    return of(this._categories);
  }

  // Change to user once the user type is created
  getCategoriesByUser(): Observable<CategoryInfo[]> {
    this._categories = [this._testCategory, this._testCategory, this._testCategory, this._testCategory];

    return of(this._categories);
  }

  getCurrentCategory() {
    return this._currentCategory;
  }

  setCurrentCategory(category: CategoryInfo) {
    this._currentCategory = category;
  }
}
