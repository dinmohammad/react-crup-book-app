import { configureStore } from "@reduxjs/toolkit";
import  BooksReducer  from "../features/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: BooksReducer,
    }
})

export default store;