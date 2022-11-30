import { combineReducers } from '@reduxjs/toolkit';
import messagesReducer from './messages/messages.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export default rootReducer;
