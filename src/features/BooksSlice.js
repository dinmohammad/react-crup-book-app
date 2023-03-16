import { createSlice } from "@reduxjs/toolkit"

// initial data 
const initialBooks = {
    books: [
        {id: 1, title: "Love Bangladesh", author: "Anishur Rahaman"},
        {id: 2, title: "English Therapy", author: "Saiful Islam"},
    ]
};

// action
export const BookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state , action) => {
            state.books.push(action.payload)
        },
    }
})

// reducer export 
export const {showBooks, addBooks} = BookSlice.actions;
export default BookSlice.reducer;