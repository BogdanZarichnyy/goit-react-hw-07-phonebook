import { combineReducers } from '@reduxjs/toolkit';
import { reducerContacts } from './slices/contactsSlice';
import { reducerFilter } from './slices/filterSlice';

export const rootReducer = combineReducers({
    contacts: reducerContacts,
    filter: reducerFilter,
});