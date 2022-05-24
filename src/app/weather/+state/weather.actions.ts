import { createAction, props } from "@ngrx/store";

import { WeatherLocation } from "../models/weather-location";

export const weatherRootKey: string = 'weather';
const actionCategoryLoadLocations: string = 'Load Locations'

export const loadLocations = createAction(`[${actionCategoryLoadLocations}] Request`);
export const loadLocationsSuccess = createAction(
    `[${actionCategoryLoadLocations}] Success`,
    props<{ locations: WeatherLocation[] }>()
);
export const loadLocationsFailure = createAction(
    `[${actionCategoryLoadLocations}] Failure`,
    props<{ error: string }>()
);
