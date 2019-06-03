import { combineReducers, ActionReducerMap } from '@ngrx/store';
import * as fromCustomComponent from './custom-component.reducer';

export interface CustomModuleState {
    customComponent: fromCustomComponent.ICustomComponentState;
}

const customModuleReducers: ActionReducerMap<CustomModuleState> = {
    customComponent: fromCustomComponent.reducer,
};

