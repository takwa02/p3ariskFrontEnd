import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditSelectionExecutionComponent } from './audit-selection-execution.component';

describe('AuditSelectionExecutionComponent', () => {
  let component: AuditSelectionExecutionComponent;
  let fixture: ComponentFixture<AuditSelectionExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditSelectionExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditSelectionExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
