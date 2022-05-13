import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { rootAppKey } from './+state/app.actions';
import { AppStateFacade } from './+state/app.facade';
import { rootAppReducer } from './+state/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(rootAppKey, rootAppReducer),
    WeatherModule
  ],
  providers: [AppStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
