import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnualCriteriaComponent } from './add-annual-criteria.component';

describe('AddAnnualCriteriaComponent', () => {
  let component: AddAnnualCriteriaComponent;
  let fixture: ComponentFixture<AddAnnualCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnualCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnualCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
