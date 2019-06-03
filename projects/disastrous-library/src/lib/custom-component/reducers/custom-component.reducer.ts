import { CustomComponentActions, CustomComponentActionTypes } from "../actions/custom-component.actions";
import { Action } from "@ngrx/store";

export interface ICustomComponentState {
    customNumber: number;
    customString: string;
}

export const initialCustomComponentState = {
    customNumber: 50,
    customString: 'ok'
}

export function reducer(state = initialCustomComponentState, action: CustomComponentActions): ICustomComponentState {
    switch (action.type) {
        case CustomComponentActionTypes.DoThis: {
            console.warn('Do this reducer');
            return {
                ...state,
            };
        }

        case CustomComponentActionTypes.DoThat: {
            console.warn('Do that reducer');

            return state;
        }

        default:
            return state;
    }
};