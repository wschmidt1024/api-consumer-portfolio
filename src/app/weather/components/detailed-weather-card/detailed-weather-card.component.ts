import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { CurrentWeatherDetails, DailyWeatherDetails, HourlyWeatherDetails } from '../../models/open-weather/one-call-response';

@Component({
  selector: 'weather-detailed-weather-card',
  templateUrl: './detailed-weather-card.component.html',
  styleUrls: ['./detailed-weather-card.component.scss']
})
export class DetailedWeatherCardComponent implements OnInit {
  @Input() current: CurrentWeatherDetails = new CurrentWeatherDetails();
  @Input() daily: DailyWeatherDetails = new DailyWeatherDetails();
  @Input() hourly: HourlyWeatherDetails[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  day(x: any): string {
    return `${moment.unix(x).format('dddd')}`;
  }

  hour(x: any): string {
    return `${moment.unix(x).format('HH:mm')}`;
  }

  minute(x: any): string {
    return `${moment.unix(x).format('HH:mm')}`;
  }
}
