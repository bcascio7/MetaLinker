import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMetaLookupComponent } from './new-meta-lookup.component';

describe('NewMetaLookupComponent', () => {
  let component: NewMetaLookupComponent;
  let fixture: ComponentFixture<NewMetaLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMetaLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMetaLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
