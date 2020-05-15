import { Component, OnInit, Input } from '@angular/core';
import { MetaInfo } from '../../core/classes/meta-info.class';

@Component({
  selector: 'app-meta-card',
  templateUrl: './meta-card.component.html',
  styleUrls: ['./meta-card.component.css']
})
export class MetaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.metaInfo);
    
  }

  @Input() metaInfo: MetaInfo;
}
