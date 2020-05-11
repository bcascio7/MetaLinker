import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaCardListComponent } from './meta-card-list.component';

describe('MetaCardListComponent', () => {
  let component: MetaCardListComponent;
  let fixture: ComponentFixture<MetaCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
