import { createAsyncThunk } from "@reduxjs/toolkit";

const MOCKAPI_URL = "https://6356a2fe9243cf412f89eac3.mockapi.io/contacts";

export const getContactsThunk = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
    try {
        const response = await fetch(`${MOCKAPI_URL}`).then(response => response.json());
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactsThunk = createAsyncThunk("contacts/add", async (contact, thunkAPI) => {
    try {
        const response = await fetch(`${MOCKAPI_URL}?`, { method: 'POST', body: JSON.stringify(contact) }).then(response => response.json());
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactsThunk = createAsyncThunk("contacts/delete", async (id, thunkAPI) => {
    try {
        const response = await fetch(`${MOCKAPI_URL}/${id}?`, { method: 'DELETE' }).then(response => response.json());
        console.log(response);
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});