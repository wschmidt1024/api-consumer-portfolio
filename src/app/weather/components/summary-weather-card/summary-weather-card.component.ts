import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { DailyWeatherDetails } from '../../models/open-weather/one-call-response';

@Component({
  selector: 'weather-summary-weather-card',
  templateUrl: './summary-weather-card.component.html',
  styleUrls: ['./summary-weather-card.component.scss']
})
export class SummaryWeatherCardComponent implements OnInit {
  @Input() daily: DailyWeatherDetails = new DailyWeatherDetails();

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

  // https://weather.com/science/weather-explainers/news/common-weather-terms-used-incorrectly
  cloudiness(clouds: number): string {
    if (clouds >= 0 && clouds < 12.5) {
      return 'Sunny';
    }
    if (clouds >= 12.5 && clouds <= 25) {
      return 'Mostly Sunny';
    }
    if (clouds > 25 && clouds < 37.5) {
      return 'Mostly Sunny'; // unofficial percentage
    }
    if (clouds >= 37.5 && clouds <= 62.5) {
      return 'Partly Cloudy';
    }
    if (clouds > 62.5 && clouds < 75) {
      return 'Partly Cloudy'; // unofficial percentage
    }
    if (clouds >= 75 && clouds <= 87.5) {
      return 'Mostly Cloudy';
    }
    if (clouds > 87.5) {
      return 'Cloudy';
    }

    return 'Clear';
  }

}
