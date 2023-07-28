import reach from './reducer';
import reachEpics from './epics';

export * from './selectors';
export * from './actions';

export const model = {
    reducers: {
        reach,
    },
    epics: {
        reachEpics,
    },
};
