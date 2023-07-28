import { reducer as ui } from './ui';
import {
    reducer as notifications, epics as notificationsEpics,
} from './notifications';

// import reach from './reach-router/reducer';
// import reachEpics from './reach-router/epics';

export const models = {
    reducers: {
        ui,
        notifications,
        // reach,
    },
    epics: {
        notificationsEpics,
        // reachEpics,
    },
};
