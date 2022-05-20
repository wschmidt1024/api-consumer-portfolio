import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppStateFacade } from './+state/app.facade';
import { rootAppReducer, rootStateKey } from './+state/app.reducers';
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
    StoreModule.forRoot({ [rootStateKey]: rootAppReducer }),
    // StoreModule.forFeature(rootAppKey, rootAppReducer),
    WeatherModule
  ],
  providers: [AppStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
