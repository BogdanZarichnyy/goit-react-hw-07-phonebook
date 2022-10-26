import { configureStore } from '@reduxjs/toolkit'
import { reducerContacts } from './slices/contactsSlice';
import { reducerFilter } from './slices/filterSlice';

export const store = configureStore({
    reducer: {
        contacts: reducerContacts,
        filter: reducerFilter,
    },
});