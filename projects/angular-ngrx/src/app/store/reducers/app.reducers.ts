import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';

export function appReducers(): ActionReducerMap<IAppState, any> {
    return {
        router: routerReducer,
        users: userReducers,
        config: configReducers
    }
}