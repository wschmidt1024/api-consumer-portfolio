import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { AppStateFacade } from '../+state/app.facade';

import { OneCallResponse } from './models/open-weather/one-call-response';
import { OpenWeatherService } from './services/open-weather/open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public currentWeather: OneCallResponse = new OneCallResponse();
  public user$: Observable<User>;
  public user: User | undefined;

  constructor(private openWeatherService: OpenWeatherService, private facade: AppStateFacade) {
    this.user$ = this.facade.user$;
  }

  ngOnInit(): void {
    this.openWeatherService.oneCall()
      .subscribe({
        next: (res: OneCallResponse) =>  {
          this.currentWeather = res;
          console.log(this.currentWeather);
        }
      });
  
      // console.log('TEST', dayjs('2022-04-23T00:17:01+00:00').format('MM/DD/YYYY HH:mm:ss'));
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
