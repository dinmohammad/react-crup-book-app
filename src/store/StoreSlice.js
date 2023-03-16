import { createSlice } from '@reduxjs/toolkit';

const { v4: uuidv4 } = require('uuid');

// initial data 
const initialStores = {
    StoresData: [
        {id: uuidv4(), name: "Akash Telecom", owner: "Anishur Rahaman", location: "Mohakhali", number: "01689852569"},
        {id: uuidv4(), name: "Sohag store", owner: "Saiful Islam", location: "Adabor", number: "01689852569"},
    ]
};


// action
export const StoreSlice = createSlice({
    name: "stores",
    initialState: initialStores,
    reducers: {
        showStores: (state) => state,
        addStores: (state , action) => {
            state.StoresData.push(action.payload)
        },
        deleteStore: (state , action) => {
            const id = action.payload;
            state.StoresData = state.StoresData.filter(store => store.id !== id)
        },
    }
})

// reducer export 
export const {showStores,addStores, deleteStore} = StoreSlice.actions;
export default StoreSlice.reducer;