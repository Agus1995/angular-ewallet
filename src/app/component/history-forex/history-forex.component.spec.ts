import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryForexComponent } from './history-forex.component';

describe('HistoryForexComponent', () => {
  let component: HistoryForexComponent;
  let fixture: ComponentFixture<HistoryForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
