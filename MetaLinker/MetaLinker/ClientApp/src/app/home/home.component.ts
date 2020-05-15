import { Component } from '@angular/core';
import { MetaInfo } from '../core/classes/meta-info.class';
import { CategoryInfo } from '../core/classes/category-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  testObject = {
    url: new URL("https://www.google.com"),
    imageUrl: new URL('https://secure.img1-fg.wfcdn.com/im/40349641/resize-h600-w600%5Ecompr-r85/5542/55420327/Lecuyer+Floral+Beige%2FIvory+Indoor+%2F+Outdoor+Area+Rug.jpg'),
    title: 'Test Title',
    description: 'Test Description'
  }
  testCategory = new CategoryInfo(this.testObject.title, this.testObject.imageUrl)
  testMeta = new MetaInfo(this.testObject.title, this.testObject.description, this.testObject.url, this.testObject.imageUrl);
  categories = [this.testCategory, this.testCategory, this.testCategory]
  metaList = [this.testMeta, this.testMeta, this.testMeta, this.testMeta]
}
