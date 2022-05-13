import { User } from '../models/user';

export const selectUser = (state: any): User => {
    return { ...state.rootApp.user };
};
