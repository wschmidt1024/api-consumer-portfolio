import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from 'src/environments/environment';

import * as AppActions from './app.actions';
import { RootAppState } from './app.reducers';
import { selectUser } from './app.selectors';

import * as WeatherActions from '../weather/+state/weather.actions';
import { selectLocations } from '../weather/+state/weather.selectors';


@Injectable()
export class AppStateFacade {
    currentUser$ = this.store.select(selectUser);
    weatherLocations$ = this.store.select(selectLocations);

    loadUser(): void {
        this.store.dispatch(AppActions.loadUserSuccess({ user: { first: 'Phillip' } }));
    }

    loadWeatherLocations(): void {
        this.store.dispatch(WeatherActions.loadLocationsSuccess({ locations: environment.locations }));
    }

    constructor(private store: Store<RootAppState>) { }
}
