import { Component, OnInit, Input } from '@angular/core';
import { CategoryInfo } from 'src/app/core/classes/category-info';
import { MetaService } from 'src/app/core/services/meta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() categoryInfo: CategoryInfo;
  
  constructor(private metaService: MetaService, private router: Router) { }

  ngOnInit() {

  }

  selectCategory(category) {
    this.metaService.getMetasByCategory(category).subscribe((res) => {
       this.router.navigate(['metas']);
    }, (err) => {
      console.log(`Error retrieving new list of meta tags by category`);
    });
  }
}
