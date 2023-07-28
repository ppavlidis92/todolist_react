import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

const initState = {
    snackbar: [],
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(actions.openSnackbar, (state, { payload }) => {
        state.snackbar.pop();
        state.snackbar.push({
            isOpen: true,
            type: payload.type,
            message: payload.message,
        });
    }));

export default reducer;
