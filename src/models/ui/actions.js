import { generateScopedActionCreator } from '@blue-functor/system';

const { createAction } = generateScopedActionCreator('UI');

export const openSnackbar = createAction('OPEN_SNACKBAR');
