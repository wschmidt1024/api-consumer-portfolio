import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryWeatherCardComponent } from './summary-weather-card.component';

describe('SmallDailyCardComponent', () => {
  let component: SummaryWeatherCardComponent;
  let fixture: ComponentFixture<SummaryWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryWeatherCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
