import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavCrumbComponent } from './nav-crumb.component';

describe('NavCrumbComponent', () => {
  let component: NavCrumbComponent;
  let fixture: ComponentFixture<NavCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
