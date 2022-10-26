import { createAsyncThunk } from "@reduxjs/toolkit";

const { REACT_APP_MOCKAPI_URL } = process.env;

export const getContactsThunk = createAsyncThunk("contacts/get", async (_, thunkAPI) => {
    try {
        const response = await fetch(`${REACT_APP_MOCKAPI_URL}`).then(response => {return response.json()});
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContactsThunk = createAsyncThunk("contacts/add", async (contact, thunkAPI) => {
    try {
        const response = await fetch(`${REACT_APP_MOCKAPI_URL}`, { method: 'POST', body: JSON.stringify(contact), headers: { 'Content-Type': 'application/json' } }).then(response => {return response.json()});
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactsThunk = createAsyncThunk("contacts/delete", async (id, thunkAPI) => {
    try {
        const response = await fetch(`${REACT_APP_MOCKAPI_URL}/${id}`, { method: 'DELETE' }).then(response => {return response.json()});
        return response;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});