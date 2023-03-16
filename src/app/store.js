import { configureStore } from "@reduxjs/toolkit";
import  BooksReducer  from "../features/BooksSlice";
import StoreSlice from "../store/StoreSlice";

const store = configureStore({
    reducer: {
        booksReducer: BooksReducer,
        storeReducer: StoreSlice,
    }
})

export default store;