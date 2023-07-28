import { generateScopedActionCreator } from '@blue-functor/system';

const { createAction } = generateScopedActionCreator('REACH_ROUTER');

export const start = createAction('START');
