import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

const initState = {
    reach: [],
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(actions.start, (state) => {
        state.reach = true;
    }));

export default reducer;
