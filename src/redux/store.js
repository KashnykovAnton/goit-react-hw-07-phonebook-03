import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contacts-reducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

//  --- EXAMPLE WITH CUSTOM MIDLEWARE ---
// const myMiddleware = store => next => action => {
//   console.log('My midleware!', action);
//   next(action);
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  logger,
];

export const store = configureStore({
  reducer: contactReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
