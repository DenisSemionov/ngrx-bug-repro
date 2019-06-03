
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { CustomComponentActionTypes, DoThatAction, DoThisAction } from '../actions/custom-component.actions';



@Injectable()
export class CustomComponentEffects {
    constructor(
        private _actions: Actions) { }

    @Effect()
    doThis = this._actions.pipe(
        ofType<DoThisAction>(CustomComponentActionTypes.DoThis),
        map((action: DoThisAction) => {
            console.warn('do this effect');

            return new DoThatAction();
        })
    );

    @Effect({ dispatch: false })
    doThat = this._actions.pipe(
        ofType<DoThatAction>(CustomComponentActionTypes.DoThat),
        tap((action: DoThatAction) => {
            console.warn('Do that action effect');
        })
    );
}
