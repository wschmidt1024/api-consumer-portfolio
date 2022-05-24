import { createReducer, on } from "@ngrx/store";

import { WeatherLocation } from "../models/weather-location";

import * as WeatherActions from './weather.actions';

export const weatherStateKey = 'weather';

export interface WeatherState {
    locations: WeatherLocation[];
}

const initialWeatherState: WeatherState = {
    locations: []
};

export const weatherReducer = createReducer(
    initialWeatherState,
    on(WeatherActions.loadLocationsSuccess, (state: WeatherState, action) => ({
        ...state,
        locations: action.locations
    }))
);
