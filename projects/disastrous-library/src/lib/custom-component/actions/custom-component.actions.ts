import { Action } from '@ngrx/store';

export enum CustomComponentActionTypes {
    DoThis = '[Custom Component] Do This',
    DoThat = '[Custom Component] Do That'
}

export class DoThisAction implements Action {
    readonly type = CustomComponentActionTypes.DoThis;

    constructor(public payload: string) { }
}

export class DoThatAction implements Action {
    readonly type = CustomComponentActionTypes.DoThat;

    constructor() { }
}

export type CustomComponentActions
    = DoThisAction
    | DoThatAction;