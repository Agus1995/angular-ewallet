import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExComponent } from './chart-ex.component';

describe('ChartExComponent', () => {
  let component: ChartExComponent;
  let fixture: ComponentFixture<ChartExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
