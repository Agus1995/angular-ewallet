import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportForexComponent } from './report-forex.component';

describe('ReportForexComponent', () => {
  let component: ReportForexComponent;
  let fixture: ComponentFixture<ReportForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
