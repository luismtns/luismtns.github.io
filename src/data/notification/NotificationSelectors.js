const notification = state => state.notification;

export const all = state => notification(state).entries;
