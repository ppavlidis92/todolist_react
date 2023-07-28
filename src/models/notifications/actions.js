import { generateScopedActionCreator } from '@blue-functor/system';

const { createAction } = generateScopedActionCreator('notifications');

const sendNotification = createAction('SEND_NOTIFICATION');
const closeNotification = createAction('CLOSE_NOTIFICATION');
const removeNotification = createAction('REMOVE_NOTIFICATION');

export {
    sendNotification,
    removeNotification,
    closeNotification,
};
