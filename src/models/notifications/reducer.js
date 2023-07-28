import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initState = {
    notifications: [],
    oldNotifications: [],
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(actions.sendNotification, (state, { payload }) => {
        state.notifications.push({
            ...payload,
            key: payload?.options?.key || Math.floor(Math.random()),
        });
    })
    .addCase(actions.closeNotification, (state, { payload }) => {
        state.notifications = state.notifications.map((notification) => (
            (payload.dismissAll || notification.key === payload)
                ? { ...notification, dismissed: true }
                : { ...notification }
        ));
    })
    .addCase(actions.removeNotification, (state, { payload }) => {
        state.notifications = state.notifications.filter(
            (notification) => notification.key !== payload,
        );
    }));

export default reducer;
