import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCriteriaListComponent } from './set-criteria-list.component';

describe('SetCriteriaListComponent', () => {
  let component: SetCriteriaListComponent;
  let fixture: ComponentFixture<SetCriteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCriteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCriteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
