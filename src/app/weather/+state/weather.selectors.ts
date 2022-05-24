import { createFeatureSelector, createSelector } from "@ngrx/store";

import { WeatherLocation } from "../models/weather-location";

import { WeatherState, weatherStateKey } from "./weather.reducers";

export const selectWeatherState = createFeatureSelector<WeatherState>(weatherStateKey);

export const selectLocations = createSelector(
    selectWeatherState,
    (state: WeatherState): WeatherLocation[] => state.locations
);
