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
        deleteBooks: (state , action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
        
    }
})

// reducer export 
export const {showBooks, addBooks, deleteBooks} = BookSlice.actions;
export default BookSlice.reducer;