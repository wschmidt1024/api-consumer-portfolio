import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';

export const rootAppKey = 'rootApp';

export const loadUser = createAction(`[${rootAppKey}] LoadUser`);
export const loadUserSuccess = createAction(
    `[${rootAppKey}] LoadUser Success`,
    props<{ user: User }>()
);
export const loadUserFailure = createAction(
    `[${rootAppKey}] LoadUser Failure`,
    props<{error: any}>()
);
