import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { OneCallResponse } from '../../models/open-weather/one-call-response';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  // https://openweathermap.org/api/one-call-api
  public oneCall(): Observable<OneCallResponse> {
    const locationIndex = 0;
    return this.http.get<OneCallResponse>(`https://api.openweathermap.org/data/2.5/onecall`, {
      params: {
        lat: environment.locations[locationIndex].latitude,
        lon: environment.locations[locationIndex].longitude,
        units: 'imperial',
        appId: environment.openWeatherApiKey
      }
    });
  }
}
// Based Upon Polygon Lat / Lon from National Weather Service
// https://www.weather.gov/documentation/services-web-api
// Google Map Polygon Sample
// https://jsfiddle.net/L49f0whv/27/
