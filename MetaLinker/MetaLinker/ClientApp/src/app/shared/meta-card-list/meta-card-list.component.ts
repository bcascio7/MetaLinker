import { Component, OnInit, Input } from '@angular/core';
import { MetaInfo } from '../../core/classes/meta-info.class';

@Component({
  selector: 'app-meta-card-list',
  templateUrl: './meta-card-list.component.html',
  styleUrls: ['./meta-card-list.component.css']
})
export class MetaCardListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(this.metaList);
  }

  @Input() metaList: MetaInfo[]
}
