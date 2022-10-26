import { createSlice } from "@reduxjs/toolkit";

import { getContactsThunk, addContactsThunk, deleteContactsThunk } from "../thunks/contactsThunk";

const contactsSlice = createSlice({
    name: "contactsSlice",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
    },
    extraReducers: {
            
        [getContactsThunk.pending](state) {
            state.contacts.isLoading = true;
        },
        [getContactsThunk.fulfilled](state, action) {
            state.contacts.items = action.payload;
            state.contacts.isLoading = false;
            state.contacts.error = null;
        },
        [getContactsThunk.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
        
        [addContactsThunk.pending](state) {
            state.contacts.isLoading = true;
        },
        [addContactsThunk.fulfilled](state, action) {
            state.contacts.items = [...state.contacts.items, action.payload];
            state.contacts.isLoading = false;
            state.contacts.error = null;
        },
        [addContactsThunk.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
        
        [deleteContactsThunk.pending](state) {
            state.contacts.isLoading = true;
        },
        [deleteContactsThunk.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id);
        },
        [deleteContactsThunk.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

    }
});

export const reducerContacts = contactsSlice.reducer;