import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUser } from './app.selectors';

@Injectable()
export class AppStateFacade {
    user$ = this.store.select(selectUser);

    constructor(private store: Store) { }
}
