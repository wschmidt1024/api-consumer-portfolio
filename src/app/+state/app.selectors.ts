import { createFeatureSelector, createSelector } from "@ngrx/store";

import { User } from "../models/user";

import { RootAppState, rootStateKey } from "./app.reducers";

export const selectRootState = createFeatureSelector<RootAppState>(rootStateKey);

export const selectUser = createSelector(
    selectRootState,
    (state: RootAppState): User => state.user
);
