import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

import { AppStateFacade } from '../+state/app.facade';
import { User } from '../models/user';

import { OneCallResponse } from './models/open-weather/one-call-response';
import { WeatherLocation } from './models/weather-location';
import { OpenWeatherService } from './services/open-weather/open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public currentWeather: OneCallResponse = new OneCallResponse();
  public currentUser$: Observable<User>;
  public user: User | undefined;
  public locations$: Observable<WeatherLocation[]>;

  constructor(private openWeatherService: OpenWeatherService, private facade: AppStateFacade) {
    this.currentUser$ = this.facade.currentUser$;
    this.locations$ = of([]);
  }

  ngOnInit(): void {
    this.locations$ = this.facade.weatherLocations$;
    this.openWeatherService.oneCall()
      .subscribe({
        next: (res: OneCallResponse) =>  {
          this.currentWeather = res;
          console.log(this.currentWeather);
        }
      });
  
      // console.log('TEST', dayjs('2022-04-23T00:17:01+00:00').format('MM/DD/YYYY HH:mm:ss'));
  }

  locationChange(event: MatSelectChange): void {
    console.log(event.value);
  }

  date(x: any): string {
    return moment.unix(x).format('MM/DD/YYYY HH:mm:ss');
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
