import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { RootAppState } from './app.reducers';
import { selectUser } from './app.selectors';

@Injectable()
export class AppStateFacade {
    currentUser$ = this.store.select(selectUser)

    constructor(private store: Store<RootAppState>) { }
}
