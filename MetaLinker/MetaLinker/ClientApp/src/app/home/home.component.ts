import { Component } from '@angular/core';
import { MetaInfo } from '../core/classes/MetaInfo.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  metaList = [new MetaInfo("Test Title", "Test description", new URL("https://www.google.com") , new URL("https://i.ebayimg.com/images/g/zagAAOSwPsxej5yg/s-l400.jpg")), new MetaInfo("Test Title", "Test description", new URL("https://www.google.com") , new URL("https://i.ebayimg.com/images/g/zagAAOSwPsxej5yg/s-l400.jpg")), new MetaInfo("Test Title", "Test description", new URL("https://www.google.com") , new URL("https://i.ebayimg.com/images/g/zagAAOSwPsxej5yg/s-l400.jpg"))]
}
