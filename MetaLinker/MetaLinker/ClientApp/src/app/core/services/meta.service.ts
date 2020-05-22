import { Injectable } from '@angular/core';
import { MetaInfo } from '../classes/meta-info.class';
import { Observable, of } from 'rxjs';
import { CategoryInfo } from '../classes/category-info';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private testObject = {
    url: new URL("https://www.google.com"),
    imageUrl: new URL('https://secure.img1-fg.wfcdn.com/im/40349641/resize-h600-w600%5Ecompr-r85/5542/55420327/Lecuyer+Floral+Beige%2FIvory+Indoor+%2F+Outdoor+Area+Rug.jpg'),
    title: 'Test Title',
    description: 'Test Description'
  };

  private _testMeta = new MetaInfo(this.testObject.title, this.testObject.description, this.testObject.url, this.testObject.imageUrl);

  private _metas: MetaInfo[] = [];

  constructor() { }

  getCurrentMetas(): Observable<MetaInfo[]> {
    return of(this._metas);
  }

  getMetasByCategory(category: CategoryInfo): Observable<MetaInfo[]> {
    this._metas = [this._testMeta, this._testMeta, this._testMeta, this._testMeta];

    return of(this._metas);
  }

  addNewMeta(newMeta: MetaInfo) {
    return newMeta;
  }
}
