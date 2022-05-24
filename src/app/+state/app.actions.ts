import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';

export const rootAppKey = 'rootApp';
const actionCategoryLoadUser = 'Load User';

export const loadUser = createAction(`[${actionCategoryLoadUser}] Request`);
export const loadUserSuccess = createAction(
    `[${actionCategoryLoadUser}] LoadUser Success`,
    props<{ user: User }>()
);
export const loadUserFailure = createAction(
    `[${actionCategoryLoadUser}] LoadUser Failure`,
    props<{error: any}>()
);
