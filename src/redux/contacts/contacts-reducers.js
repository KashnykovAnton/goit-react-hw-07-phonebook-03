import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from '.';
import { contactsOperations } from '.';

const contacts = createReducer([], {
  [contactsOperations.fetchContact.fulfilled]: (_, action) => action.payload,
  [contactsOperations.addContact.fulfilled]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsOperations.deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});

const filter = createReducer('', {
  [contactsActions.filterContact]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsOperations.fetchContact.pending]: () => true,
  [contactsOperations.fetchContact.fulfilled]: () => false,
  [contactsOperations.fetchContact.rejected]: () => false,

  [contactsOperations.addContact.pending]: () => true,
  [contactsOperations.addContact.fulfilled]: () => false,
  [contactsOperations.addContact.rejected]: () => false,

  [contactsOperations.deleteContact.pending]: () => true,
  [contactsOperations.deleteContact.fulfilled]: () => false,
  [contactsOperations.deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [contactsOperations.fetchContact.rejected]: (_, action) => action.payload,
  [contactsOperations.fetchContact.pending]: () => null,

  [contactsOperations.addContact.rejected]: (_, action) => action.payload,
  [contactsOperations.addContact.pending]: () => null,

  [contactsOperations.deleteContact.rejected]: (_, action) => action.payload,
  [contactsOperations.deleteContact.pending]: () => null,
});

export const contactReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});
