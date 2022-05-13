import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user';

import * as AppActions from './app.actions';

export interface RootAppState {
    user: User;
}

const initialAppState: RootAppState = {
    user: new User()
};

export const rootAppReducer = createReducer(
    initialAppState,
    on(AppActions.loadUserSuccess, (state, action) => ({
        ...state,
        user: action.user
    })),
);
