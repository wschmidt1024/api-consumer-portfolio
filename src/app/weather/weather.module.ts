import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'; 

import { WeatherComponent } from './weather.component';
import { SummaryWeatherCardComponent } from './components/summary-weather-card/summary-weather-card.component';
import { DetailedWeatherCardComponent } from './components/detailed-weather-card/detailed-weather-card.component';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';

@NgModule({
  declarations: [
    WeatherComponent,
    SummaryWeatherCardComponent,
    DetailedWeatherCardComponent,
    WindDirectionPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSelectModule
  ]
})
export class WeatherModule { }
