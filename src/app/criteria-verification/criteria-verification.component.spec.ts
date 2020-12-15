import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaVerificationComponent } from './criteria-verification.component';

describe('CriteriaVerificationComponent', () => {
  let component: CriteriaVerificationComponent;
  let fixture: ComponentFixture<CriteriaVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
