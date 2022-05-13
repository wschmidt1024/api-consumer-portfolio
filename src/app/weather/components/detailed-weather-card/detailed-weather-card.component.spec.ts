import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedWeatherCardComponent } from './detailed-weather-card.component';

describe('LargeDailyCardComponent', () => {
  let component: DetailedWeatherCardComponent;
  let fixture: ComponentFixture<DetailedWeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedWeatherCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
