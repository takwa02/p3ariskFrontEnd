import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCriteriaComponent } from './copy-criteria.component';

describe('CopyCriteriaComponent', () => {
  let component: CopyCriteriaComponent;
  let fixture: ComponentFixture<CopyCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
