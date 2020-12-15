import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditdialogComponent } from './auditdialog.component';

describe('AuditdialogComponent', () => {
  let component: AuditdialogComponent;
  let fixture: ComponentFixture<AuditdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
