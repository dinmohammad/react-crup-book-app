import { createSlice } from '@reduxjs/toolkit';

const { v4: uuidv4 } = require('uuid');

// initial data 
const initialStores = {
    StoresData: [
        {id: uuidv4(), Name: "Akash Telecom", Owner: "Anishur Rahaman", location: "Mohakhali", number: "01689852569"},
        {id: uuidv4(), Name: "Sohag store", Owner: "Saiful Islam", location: "Adabor", number: "01689852569"},
    ]
};


// action
export const StoreSlice = createSlice({
    name: "stores",
    initialState: initialStores,
    reducers: {
        showStores: (state) => state,
    }
})

// reducer export 
export const {showStores} = StoreSlice.actions;
export default StoreSlice.reducer;