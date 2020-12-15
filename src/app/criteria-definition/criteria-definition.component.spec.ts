import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaDefinitionComponent } from './criteria-definition.component';

describe('CriteriaDefinitionComponent', () => {
  let component: CriteriaDefinitionComponent;
  let fixture: ComponentFixture<CriteriaDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
