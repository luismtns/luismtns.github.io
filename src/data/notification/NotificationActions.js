import * as types from './NotificationTypes';

export const remove = uid => ({
  type: types.NOTIFICATION_ENTRY_REMOVE,
  uid,
});

