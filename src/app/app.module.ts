import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppStateFacade } from './+state/app.facade';
import { rootAppReducer, rootStateKey } from './+state/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { weatherReducer, weatherStateKey } from './weather/+state/weather.reducers';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ [rootStateKey]: rootAppReducer }),
    StoreModule.forFeature(weatherStateKey, weatherReducer),
    WeatherModule,
    BrowserAnimationsModule
  ],
  providers: [AppStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
