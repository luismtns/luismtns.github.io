import { v4 as uuidv4 } from 'uuid';

import * as types from './NotificationTypes';

const initialState = {
  entries: [],
};

const testAction = (type, pattern) => {
  const regexp = new RegExp(`_${pattern}$`);
  return type && type.match(regexp) ? type : undefined;
};

const changeState = (state, newValues = {}) => ({
  ...state,
  ...newValues,
});

const pushNotification = (state, level, message) => changeState(
  state,
  {
    entries: [
      ...state.entries,
      {
        uid: uuidv4(),
        level,
        message,
      },
    ],
  },
);

const removeEntry = (state, uid) => changeState(
  state,
  {
    entries: state.entries.filter(x => x.uid !== uid),
  }
);

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case testAction(action.type, "ERROR"):
    if (action.payload.response) {
      action.payload = action.payload.response.data.messages.join('<br />');
    } else {
      console.error(action.payload);
    }

    return pushNotification(
      state,
      'error',
      action.payload,
    );
  case testAction(action.type, "SUCCESS"):
    if (action.payload.messages) {
      action.payload = action.payload.messages.join('<br />');
    }

    return pushNotification(
      state,
      'success',
      action.payload,
    );
  case testAction(action.type, "_INFO"):
    if (action.payload.messages) {
      action.payload = action.payload.messages.join('<br />');
    }

    return pushNotification(
      state,
      'info',
      action.payload,
    );
  case types.NOTIFICATION_ENTRY_REMOVE:
    return removeEntry(
      state,
      action.uid,
    );
  default:
    return state;
  }
}

