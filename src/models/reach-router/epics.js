import { combineEpics, ofType } from 'redux-observable';
import { effect } from '@blue-functor/system';

import { tap } from 'rxjs';
import * as actions from './actions';
import * as services from './services';

const startEpic = (action$) => action$.pipe(
    ofType(actions.start.type),
    tap(() => console.log('in')),
    effect(action$, services.api),
);

export default combineEpics(startEpic);
