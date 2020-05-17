import { Component, OnInit } from '@angular/core';
import { MetaService } from '../core/services/meta.service';
import { MetaInfo } from '../core/classes/meta-info.class';
import { CategoryService } from '../core/services/category.service';
import { CategoryInfo } from '../core/classes/category-info';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
  metas: MetaInfo[];

  constructor(private metaService: MetaService, private categoryService: CategoryService) { }

  ngOnInit() {
    const currentCategory: CategoryInfo = this.categoryService.getCurrentCategory();
    this.metaService.getMetasByCategory(currentCategory).subscribe((metas: MetaInfo[]) => {
      this.metas = metas;
      console.log(this.metas);
    }, (err) => {
      console.log(`Error occurred during metaService getCall: ${err}`)
    });
  }

}
